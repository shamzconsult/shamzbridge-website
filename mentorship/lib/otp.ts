import { createHmac, randomBytes, randomInt, timingSafeEqual } from "node:crypto";

import { NextResponse } from "next/server";

import { HOST_COMPANY, fullName, getMentorById, getStudentById } from "@/mentorship/data/program";
import { db, isDbConfigured } from "@/mentorship/lib/db";
import { otpEmail } from "@/mentorship/lib/email-templates";
import { deliver, isMailConfigured } from "@/mentorship/lib/mail";
import { OTP_HEADER, OTP_LENGTH } from "@/mentorship/lib/otp-shared";

const CODE_TTL_MS = 10 * 60 * 1000;
/** How long after verifying the person has to finish submitting. */
const TICKET_TTL_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const RESEND_COOLDOWN_MS = 30 * 1000;
const ISSUE_WINDOW_MS = 15 * 60 * 1000;
const MAX_ISSUES_PER_WINDOW = 5;

const SECRET =
  process.env.OTP_SECRET ||
  process.env.ADMIN_SECRET ||
  process.env.DATABASE_URL ||
  "mfc-otp-v1";

interface Identity {
  subject: string;
  name: string;
  email: string;
}

function resolveIdentity(role: string, personId: string): Identity | null {
  if (role === "mentee") {
    const student = getStudentById(personId);
    return student
      ? { subject: `mentee:${student.id}`, name: fullName(student), email: student.email.trim() }
      : null;
  }
  if (role === "mentor") {
    const mentor = getMentorById(personId);
    return mentor
      ? { subject: `mentor:${mentor.id}`, name: mentor.name, email: mentor.email.trim() }
      : null;
  }
  return null;
}

const digest = (id: string, value: string) =>
  createHmac("sha256", SECRET).update(`${id}:${value}`).digest("hex");

function matches(expected: string | null, id: string, value: string) {
  if (!expected) return false;
  const a = Buffer.from(expected, "hex");
  const b = Buffer.from(digest(id, value), "hex");
  return a.length === b.length && timingSafeEqual(a, b);
}

interface Challenge {
  id: string;
  subject: string;
  codeHash: string;
  /** Code expiry until verified, then ticket expiry. */
  expiresAt: number;
  attempts: number;
  verifiedAt: number | null;
  ticketHash: string | null;
  consumedAt: number | null;
  createdAt: number;
}

interface OtpStore {
  /** Creation times of this subject's codes since `since`. */
  issuedSince(subject: string, since: number): Promise<number[]>;
  /** Saves a new code and retires any older unverified ones for the subject. */
  create(challenge: Challenge): Promise<void>;
  remove(id: string): Promise<void>;
  /** Counts a guess against a pending code and returns it, or null if none. */
  recordAttempt(id: string): Promise<Challenge | null>;
  markVerified(id: string, ticketHash: string, expiresAt: number): Promise<boolean>;
  /** Atomically marks a verified, unexpired ticket as used. */
  consume(id: string, subject: string, ticketHash: string, now: number): Promise<boolean>;
}

/* ---- Neon ---------------------------------------------------------------- */

let tableReady: Promise<void> | null = null;

function ensureTable() {
  if (!tableReady) {
    tableReady = (async () => {
      const sql = db();
      await sql.query(`CREATE TABLE IF NOT EXISTS otp_challenges (
        id          text PRIMARY KEY,
        subject     text NOT NULL,
        code_hash   text NOT NULL,
        expires_at  timestamptz NOT NULL,
        attempts    integer NOT NULL DEFAULT 0,
        verified_at timestamptz,
        ticket_hash text,
        consumed_at timestamptz,
        created_at  timestamptz NOT NULL DEFAULT now()
      )`);
      await sql.query(
        `CREATE INDEX IF NOT EXISTS otp_challenges_subject_idx ON otp_challenges (subject, created_at)`,
      );
    })().catch((error) => {
      tableReady = null;
      throw error;
    });
  }
  return tableReady;
}

const iso = (ms: number) => new Date(ms).toISOString();
const ms = (value: unknown) => (value ? new Date(value as string).getTime() : null);

const dbStore: OtpStore = {
  async issuedSince(subject, since) {
    await ensureTable();
    const rows = await db()<{ created_at: string }>`
      SELECT created_at FROM otp_challenges
      WHERE subject = ${subject} AND created_at > ${iso(since)}::timestamptz
    `;
    return rows.map((row) => ms(row.created_at) ?? 0);
  },

  async create(challenge) {
    await ensureTable();
    const sql = db();
    await sql`
      UPDATE otp_challenges SET consumed_at = now()
      WHERE subject = ${challenge.subject} AND verified_at IS NULL AND consumed_at IS NULL
    `;
    await sql`
      INSERT INTO otp_challenges (id, subject, code_hash, expires_at, created_at)
      VALUES (${challenge.id}, ${challenge.subject}, ${challenge.codeHash},
              ${iso(challenge.expiresAt)}::timestamptz, ${iso(challenge.createdAt)}::timestamptz)
    `;
    // Old rows are only useful for rate limiting, which looks back 15 minutes.
    await sql`DELETE FROM otp_challenges WHERE created_at < now() - interval '1 day'`;
  },

  async remove(id) {
    await ensureTable();
    await db()`DELETE FROM otp_challenges WHERE id = ${id}`;
  },

  async recordAttempt(id) {
    await ensureTable();
    const rows = await db()`
      UPDATE otp_challenges SET attempts = attempts + 1
      WHERE id = ${id} AND verified_at IS NULL AND consumed_at IS NULL
      RETURNING id, subject, code_hash, expires_at, attempts, created_at
    `;
    const row = rows[0];
    if (!row) return null;
    return {
      id: String(row.id),
      subject: String(row.subject),
      codeHash: String(row.code_hash),
      expiresAt: ms(row.expires_at) ?? 0,
      attempts: Number(row.attempts),
      verifiedAt: null,
      ticketHash: null,
      consumedAt: null,
      createdAt: ms(row.created_at) ?? 0,
    };
  },

  async markVerified(id, ticketHash, expiresAt) {
    await ensureTable();
    const rows = await db()`
      UPDATE otp_challenges
      SET verified_at = now(), ticket_hash = ${ticketHash}, expires_at = ${iso(expiresAt)}::timestamptz
      WHERE id = ${id} AND verified_at IS NULL AND consumed_at IS NULL
      RETURNING id
    `;
    return rows.length > 0;
  },

  async consume(id, subject, ticketHash, now) {
    await ensureTable();
    const rows = await db()`
      UPDATE otp_challenges SET consumed_at = now()
      WHERE id = ${id} AND subject = ${subject} AND ticket_hash = ${ticketHash}
        AND verified_at IS NOT NULL AND consumed_at IS NULL
        AND expires_at > ${iso(now)}::timestamptz
      RETURNING id
    `;
    return rows.length > 0;
  },
};

/* ---- Memory (no database configured) --------------------------------------- */

// Next bundles each route separately, so a plain module-level Map would give
// /api/otp/request and the form routes different copies. One per process:
const memory = globalThis as typeof globalThis & { __mfcOtpChallenges?: Map<string, Challenge> };
const challenges = (memory.__mfcOtpChallenges ??= new Map<string, Challenge>());

function prune(now: number) {
  for (const [id, challenge] of challenges) {
    if (challenge.createdAt < now - ISSUE_WINDOW_MS && challenge.expiresAt < now) {
      challenges.delete(id);
    }
  }
}

const memoryStore: OtpStore = {
  async issuedSince(subject, since) {
    return [...challenges.values()]
      .filter((c) => c.subject === subject && c.createdAt > since)
      .map((c) => c.createdAt);
  },
  async create(challenge) {
    prune(challenge.createdAt);
    for (const c of challenges.values()) {
      if (c.subject === challenge.subject && c.verifiedAt === null && c.consumedAt === null) {
        c.consumedAt = challenge.createdAt;
      }
    }
    challenges.set(challenge.id, { ...challenge });
  },
  async remove(id) {
    challenges.delete(id);
  },
  async recordAttempt(id) {
    const c = challenges.get(id);
    if (!c || c.verifiedAt !== null || c.consumedAt !== null) return null;
    c.attempts += 1;
    return { ...c };
  },
  async markVerified(id, ticketHash, expiresAt) {
    const c = challenges.get(id);
    if (!c || c.verifiedAt !== null || c.consumedAt !== null) return false;
    c.verifiedAt = Date.now();
    c.ticketHash = ticketHash;
    c.expiresAt = expiresAt;
    return true;
  },
  async consume(id, subject, ticketHash, now) {
    const c = challenges.get(id);
    if (!c || c.subject !== subject || c.ticketHash !== ticketHash) return false;
    if (c.verifiedAt === null || c.consumedAt !== null || c.expiresAt <= now) return false;
    c.consumedAt = now;
    return true;
  },
};

const store = (): OtpStore => (isDbConfigured() ? dbStore : memoryStore);

/* --------------------------------------------------------------------------
 * 1. ISSUE
 * ------------------------------------------------------------------------*/

type Failure = { ok: false; status: number; message: string };

export type IssueResult =
  | { ok: true; challengeId: string; sentTo: string; expiresInSeconds: number; resendInSeconds: number }
  | (Failure & { retryInSeconds?: number });

export async function issueCode(role: string, personId: string): Promise<IssueResult> {
  const identity = resolveIdentity(role, personId);
  if (!identity) {
    return { ok: false, status: 400, message: "Please select your name from the list first." };
  }
  if (!identity.email) {
    return {
      ok: false,
      status: 409,
      message:
        "There is no email address on file for you, so we cannot verify that it is you. Please contact the organiser.",
    };
  }

  const mailReady = isMailConfigured();
  const devMode = process.env.NODE_ENV !== "production";
  if (!mailReady && !devMode) {
    return {
      ok: false,
      status: 503,
      message: `Verification codes can't be sent right now. Please contact ${HOST_COMPANY.name}.`,
    };
  }

  const now = Date.now();
  const recent = await store().issuedSince(identity.subject, now - ISSUE_WINDOW_MS);

  const latest = Math.max(0, ...recent);
  if (latest > now - RESEND_COOLDOWN_MS) {
    const retryInSeconds = Math.ceil((latest + RESEND_COOLDOWN_MS - now) / 1000);
    return {
      ok: false,
      status: 429,
      retryInSeconds,
      message: `A code was just sent. Please wait ${retryInSeconds}s before asking for another.`,
    };
  }
  if (recent.length >= MAX_ISSUES_PER_WINDOW) {
    return {
      ok: false,
      status: 429,
      message: "Too many codes have been requested. Please wait 15 minutes and try again.",
    };
  }

  const id = randomBytes(16).toString("hex");
  const code = String(randomInt(0, 10 ** OTP_LENGTH)).padStart(OTP_LENGTH, "0");

  await store().create({
    id,
    subject: identity.subject,
    codeHash: digest(id, code),
    expiresAt: now + CODE_TTL_MS,
    attempts: 0,
    verifiedAt: null,
    ticketHash: null,
    consumedAt: null,
    createdAt: now,
  });

  if (mailReady) {
    const { delivered, detail } = await deliver(
      "otp",
      otpEmail({ name: identity.name, code, minutes: CODE_TTL_MS / 60_000 }),
      { to: identity.email },
    );
    if (!delivered) {
      // The provider's reason is for the server log, not for the person waiting on a code.
      console.error(`[otp] code for ${identity.subject} was not delivered: ${detail ?? "unknown reason"}`);
      await store().remove(id).catch(() => undefined);
      return {
        ok: false,
        status: 502,
        message: `We couldn't send a code to ${identity.email} just now. Please try again in a few minutes, or contact ${HOST_COMPANY.name} if it keeps happening.`,
      };
    }
  } else {
    // Local development without a mailbox: print the code instead.
    console.info(`[otp] (dev, mail not configured) code for ${identity.subject}: ${code}`);
  }

  return {
    ok: true,
    challengeId: id,
    sentTo: identity.email,
    expiresInSeconds: CODE_TTL_MS / 1000,
    resendInSeconds: RESEND_COOLDOWN_MS / 1000,
  };
}

/* --------------------------------------------------------------------------
 * 2. VERIFY
 * ------------------------------------------------------------------------*/

export type VerifyResult =
  | { ok: true; ticket: string }
  | (Failure & { reason: "invalid" | "expired" | "locked"; attemptsLeft?: number });

export async function verifyCode(challengeId: string, code: string): Promise<VerifyResult> {
  const expired = {
    ok: false as const,
    status: 410,
    reason: "expired" as const,
    message: "This code has expired or was already used. Please request a new one.",
  };

  if (!/^[0-9a-f]{32}$/.test(challengeId)) return expired;
  if (!new RegExp(`^\\d{${OTP_LENGTH}}$`).test(code)) {
    return {
      ok: false,
      status: 400,
      reason: "invalid",
      message: `Please enter the ${OTP_LENGTH}-digit code.`,
    };
  }

  const challenge = await store().recordAttempt(challengeId);
  const now = Date.now();
  if (!challenge || challenge.expiresAt <= now) return expired;

  if (challenge.attempts > MAX_ATTEMPTS) {
    return {
      ok: false,
      status: 429,
      reason: "locked",
      message: "Too many incorrect attempts. Please request a new code.",
    };
  }

  if (!matches(challenge.codeHash, challengeId, code)) {
    const attemptsLeft = MAX_ATTEMPTS - challenge.attempts;
    if (attemptsLeft <= 0) {
      return {
        ok: false,
        status: 429,
        reason: "locked",
        message: "Too many incorrect attempts. Please request a new code.",
      };
    }
    return {
      ok: false,
      status: 401,
      reason: "invalid",
      attemptsLeft,
      message: `That code is incorrect. ${attemptsLeft} attempt${attemptsLeft === 1 ? "" : "s"} left.`,
    };
  }

  const secret = randomBytes(24).toString("base64url");
  const verified = await store().markVerified(challengeId, digest(challengeId, secret), now + TICKET_TTL_MS);
  if (!verified) return expired;

  return { ok: true, ticket: `${challengeId}.${secret}` };
}

/* --------------------------------------------------------------------------
 * 3. ENFORCE — called by every protected form route
 * ------------------------------------------------------------------------*/

/**
 * Consumes the verification ticket sent with a submission. Returns a response
 * to return early with when the sender has not proven who they are, or null
 * when the submission may proceed. A ticket works once, only for the person it
 * was issued to, and only within TICKET_TTL_MS of verifying.
 */
export async function requireVerifiedSender(
  request: Request,
  role: string,
  personId: string,
): Promise<NextResponse | null> {
  const deny = (message: string, status = 401) =>
    NextResponse.json({ ok: false, message, verification: "required" }, { status });

  const identity = resolveIdentity(role, personId);
  if (!identity) return deny("Please select your name from the list.", 400);

  const ticket = request.headers.get(OTP_HEADER) ?? "";
  const [id, secret] = ticket.split(".");
  if (!id || !secret) {
    return deny("Please verify your email address before submitting.");
  }

  try {
    const ok = await store().consume(id, identity.subject, digest(id, secret), Date.now());
    if (ok) return null;
  } catch (error) {
    console.error("[otp] ticket check failed:", error);
    return deny("We could not confirm your verification. Please try again.", 503);
  }

  return deny("Your email verification has expired or was already used. Please submit again to get a new code.");
}
