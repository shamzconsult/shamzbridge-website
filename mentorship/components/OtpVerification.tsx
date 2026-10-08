"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CircleAlert, LoaderCircle, MailCheck, RotateCw, ShieldCheck } from "lucide-react-v1";

import { getMentorById, getStudentById } from "@/mentorship/data/program";
import { OTP_LENGTH, type OtpRole } from "@/mentorship/lib/otp-shared";
import { cn } from "@/mentorship/lib/utils";


type Phase = "sending" | "entry" | "verifying" | "failed";

interface Challenge {
  key: string;
  challengeId: string;
  sentTo: string;
  expiresAt: number;
}

const emptyDigits = () => Array.from({ length: OTP_LENGTH }, () => "");

export function useOtpVerification() {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("sending");
  const [digits, setDigits] = useState<string[]>(emptyDigits);
  const [error, setError] = useState("");
  const [sentTo, setSentTo] = useState("");
  const [resendAt, setResendAt] = useState(0);
  const [now, setNow] = useState(() => Date.now());

  const person = useRef<{ role: OtpRole; personId: string } | null>(null);
  /** Kept between openings, so cancelling and resubmitting reuses the code. */
  const challenge = useRef<Challenge | null>(null);
  const resolver = useRef<((ticket: string | null) => void) | null>(null);

  const finish = useCallback((ticket: string | null) => {
    resolver.current?.(ticket);
    resolver.current = null;
    setOpen(false);
  }, []);

  const sendCode = useCallback(async () => {
    const who = person.current;
    if (!who) return;

    setPhase("sending");
    setError("");
    setDigits(emptyDigits());

    try {
      const response = await fetch("/api/otp/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(who),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result?.ok) {
        if (typeof result?.retryInSeconds === "number") {
          setResendAt(Date.now() + result.retryInSeconds * 1000);
        }
        setError(result?.message ?? "We could not send a verification code. Please try again.");
        // A code already on its way is still worth entering.
        setPhase(challenge.current ? "entry" : "failed");
        return;
      }

      challenge.current = {
        key: `${who.role}:${who.personId}`,
        challengeId: result.challengeId,
        sentTo: result.sentTo,
        expiresAt: Date.now() + result.expiresInSeconds * 1000,
      };
      setSentTo(result.sentTo);
      setResendAt(Date.now() + result.resendInSeconds * 1000);
      setPhase("entry");
    } catch {
      setError("We could not reach the server. Check your internet connection and try again.");
      setPhase(challenge.current ? "entry" : "failed");
    }
  }, []);

  const verify = useCallback(
    (role: OtpRole, personId: string): Promise<string | null> => {
      // One verification at a time; a second click while open is ignored.
      if (resolver.current) return Promise.resolve(null);

      person.current = { role, personId };
      // Known up front from the roster, so the dialog can say where the code is going.
      const listed = role === "mentee" ? getStudentById(personId) : getMentorById(personId);
      setSentTo(listed?.email ?? "");
      setError("");
      setDigits(emptyDigits());
      setOpen(true);

      const existing = challenge.current;
      if (existing && existing.key === `${role}:${personId}` && existing.expiresAt > Date.now() + 5000) {
        setPhase("entry");
      } else {
        challenge.current = null;
        void sendCode();
      }

      return new Promise((resolve) => {
        resolver.current = resolve;
      });
    },
    [sendCode],
  );

  const submitCode = useCallback(
    async (code: string) => {
      const current = challenge.current;
      if (!current || code.length !== OTP_LENGTH) return;

      setPhase("verifying");
      setError("");

      try {
        const response = await fetch("/api/otp/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ challengeId: current.challengeId, code }),
        });
        const result = await response.json().catch(() => ({}));

        if (response.ok && result?.ok && typeof result.ticket === "string") {
          challenge.current = null;
          finish(result.ticket);
          return;
        }

        if (result?.reason === "expired" || result?.reason === "locked") {
          challenge.current = null;
        }
        setError(result?.message ?? "That code could not be verified. Please try again.");
        setDigits(emptyDigits());
        setPhase("entry");
      } catch {
        setError("We could not reach the server. Check your internet connection and try again.");
        setPhase("entry");
      }
    },
    [finish],
  );

  // Ticks the resend countdown while the dialog is open.
  useEffect(() => {
    if (!open) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [open]);

  // Leaving the page mid-verification should not leave a promise hanging.
  useEffect(() => () => resolver.current?.(null), []);

  const otpDialog = (
    <OtpDialog
      open={open}
      phase={phase}
      digits={digits}
      error={error}
      sentTo={sentTo}
      hasCode={Boolean(challenge.current)}
      resendIn={Math.max(0, Math.ceil((resendAt - now) / 1000))}
      onDigits={(next) => {
        setDigits(next);
        if (error) setError("");
        if (next.every(Boolean)) void submitCode(next.join(""));
      }}
      onVerify={() => void submitCode(digits.join(""))}
      onResend={() => void sendCode()}
      onCancel={() => finish(null)}
    />
  );

  return { verify, otpDialog };
}


function OtpDialog({
  open,
  phase,
  digits,
  error,
  sentTo,
  hasCode,
  resendIn,
  onDigits,
  onVerify,
  onResend,
  onCancel,
}: {
  open: boolean;
  phase: Phase;
  digits: string[];
  error: string;
  sentTo: string;
  hasCode: boolean;
  resendIn: number;
  onDigits: (digits: string[]) => void;
  onVerify: () => void;
  onResend: () => void;
  onCancel: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const inputs = useRef<Array<HTMLInputElement | null>>([]);
  /** Read by the focus effect without re-running it on every keystroke. */
  const latestDigits = useRef(digits);
  latestDigits.current = digits;

  useEffect(() => setMounted(true), []);

  // Focus the first empty box whenever the code becomes enterable.
  useEffect(() => {
    if (open && phase === "entry" && hasCode) {
      const firstEmpty = latestDigits.current.findIndex((digit) => !digit);
      inputs.current[firstEmpty === -1 ? OTP_LENGTH - 1 : firstEmpty]?.focus();
    }
  }, [open, phase, hasCode]);

  // Escape cancels; the page behind does not scroll while the dialog is up.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel();
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onCancel]);

  if (!mounted) return null;

  const busy = phase === "sending" || phase === "verifying";
  const canType = hasCode && phase === "entry";
  const complete = digits.every(Boolean);

  /** Spreads typed or pasted digits across the boxes from `start`. */
  function fill(start: number, raw: string) {
    const incoming = raw.replace(/\D/g, "").slice(0, OTP_LENGTH - start);
    if (!incoming) return;
    const next = [...digits];
    incoming.split("").forEach((digit, offset) => {
      next[start + offset] = digit;
    });
    onDigits(next);
    inputs.current[Math.min(start + incoming.length, OTP_LENGTH - 1)]?.focus();
  }

  function onKeyDown(index: number, event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace") {
      event.preventDefault();
      const next = [...digits];
      if (next[index]) {
        next[index] = "";
      } else if (index > 0) {
        next[index - 1] = "";
        inputs.current[index - 1]?.focus();
      }
      onDigits(next);
    } else if (event.key === "ArrowLeft" && index > 0) {
      inputs.current[index - 1]?.focus();
    } else if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    } else if (event.key === "Enter" && complete) {
      event.preventDefault();
      onVerify();
    }
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="otp-scrim"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/60 px-4 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="otp-title"
            aria-describedby="otp-description"
            className="w-full max-w-sm rounded-[28px] bg-white p-6 shadow-[0_12px_40px_rgba(7,12,24,0.35)] sm:p-7"
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
          >
            <div className="mx-auto grid size-12 place-items-center rounded-full bg-brand-50 text-brand-600">
              <ShieldCheck className="size-6" aria-hidden />
            </div>

            <h2
              id="otp-title"
              className="mt-4 text-center font-[family-name:var(--font-display)] text-2xl font-bold text-ink-900"
            >
              Verify it&apos;s you
            </h2>

            <div id="otp-description" className="mt-2 text-center text-sm leading-relaxed text-ink-600">
              {phase === "sending" ? (
                <span className="inline-flex items-center gap-2">
                  <LoaderCircle className="size-4 animate-spin" aria-hidden />
                  Sending a {OTP_LENGTH}-digit code to your registered email
                </span>
              ) : hasCode ? (
                <>We sent a {OTP_LENGTH}-digit code to your registered email</>
              ) : (
                <>We&apos;ll email a {OTP_LENGTH}-digit code to your registered email</>
              )}
              {sentTo && (
                <span className="mx-auto mt-2 flex w-fit max-w-full items-center gap-1.5 rounded-full bg-ink-50 px-3 py-1.5 font-semibold text-ink-900">
                  <MailCheck className="size-4 shrink-0 text-teal-600" aria-hidden />
                  <span className="truncate">{sentTo}</span>
                </span>
              )}
              {hasCode && phase !== "sending" && (
                <span className="mt-2 block text-xs text-ink-500">
                  Check that inbox, and your spam folder if it hasn&apos;t arrived.
                </span>
              )}
            </div>

            <fieldset className="mt-6" disabled={!canType}>
              <legend className="sr-only">Verification code</legend>
              <div className="flex justify-center gap-3">
                {digits.map((digit, index) => (
                  <input
                    key={index}
                    ref={(element) => {
                      inputs.current[index] = element;
                    }}
                    value={digit}
                    onChange={(event) => fill(index, event.target.value)}
                    onKeyDown={(event) => onKeyDown(index, event)}
                    onPaste={(event) => {
                      event.preventDefault();
                      fill(0, event.clipboardData.getData("text"));
                    }}
                    onFocus={(event) => event.target.select()}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    autoComplete={index === 0 ? "one-time-code" : "off"}
                    maxLength={OTP_LENGTH}
                    aria-label={`Digit ${index + 1} of ${OTP_LENGTH}`}
                    aria-invalid={Boolean(error) || undefined}
                    className={cn(
                      "h-16 w-14 rounded-xl border-2 bg-white text-center font-[family-name:var(--font-display)] text-2xl font-bold text-ink-900 outline-none transition",
                      "focus:border-brand-500 focus:ring-4 focus:ring-brand-100",
                      "disabled:cursor-not-allowed disabled:bg-ink-50 disabled:text-ink-300",
                      error ? "border-red-400" : digit ? "border-ink-300" : "border-ink-200",
                    )}
                  />
                ))}
              </div>
            </fieldset>

            <div className="mt-3 min-h-10" aria-live="polite">
              {error ? (
                <p role="alert" className="flex items-start justify-center gap-1.5 text-center text-sm text-red-700">
                  <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
                  {error}
                </p>
              ) : phase === "verifying" ? (
                <p className="flex items-center justify-center gap-2 text-sm text-ink-500">
                  <LoaderCircle className="size-4 animate-spin" aria-hidden />
                  Checking your code…
                </p>
              ) : hasCode ? (
                <p className="text-center text-xs text-ink-500">
                  The code expires in 10 minutes and can only be used once.
                </p>
              ) : null}
            </div>

            <div className="mt-2 flex justify-center">
              <button
                type="button"
                onClick={onResend}
                disabled={busy || resendIn > 0}
                className="inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold text-brand-700 transition hover:bg-brand-50 disabled:cursor-not-allowed disabled:text-ink-400 disabled:hover:bg-transparent"
              >
                <RotateCw className="size-4" aria-hidden />
                {resendIn > 0
                  ? `Resend code in ${resendIn}s`
                  : hasCode
                    ? "Resend code"
                    : "Send code"}
              </button>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={onCancel}
                className="h-10 rounded-full px-5 text-sm font-semibold text-ink-700 transition hover:bg-ink-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onVerify}
                disabled={!canType || !complete}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 hover:shadow-md disabled:cursor-not-allowed disabled:bg-ink-200 disabled:text-ink-500 disabled:shadow-none"
              >
                {phase === "verifying" && <LoaderCircle className="size-4 animate-spin" aria-hidden />}
                Verify
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
