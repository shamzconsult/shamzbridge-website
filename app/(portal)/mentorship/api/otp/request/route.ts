import { NextResponse } from "next/server";

import { issueCode } from "@/mentorship/lib/otp";

export const runtime = "nodejs";

/** Emails a verification code to the roster address of the selected person. */
export async function POST(request: Request) {
  let body: { role?: string; personId?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "We could not read your request." }, { status: 400 });
  }

  try {
    const result = await issueCode(String(body.role ?? ""), String(body.personId ?? ""));
    if (!result.ok) {
      const { status, ...rest } = result;
      return NextResponse.json(rest, { status });
    }
    return NextResponse.json(result);
  } catch (error) {
    console.error("[otp] could not issue a code:", error);
    return NextResponse.json(
      { ok: false, message: "We could not send a verification code. Please try again." },
      { status: 500 },
    );
  }
}
