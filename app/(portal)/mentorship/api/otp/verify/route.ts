import { NextResponse } from "next/server";

import { verifyCode } from "@/mentorship/lib/otp";

export const runtime = "nodejs";

/** Checks an emailed code and returns the one-time ticket a form submits with. */
export async function POST(request: Request) {
  let body: { challengeId?: string; code?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "We could not read your request." }, { status: 400 });
  }

  try {
    const result = await verifyCode(String(body.challengeId ?? ""), String(body.code ?? "").trim());
    if (!result.ok) {
      const { status, ...rest } = result;
      return NextResponse.json(rest, { status });
    }
    return NextResponse.json(result);
  } catch (error) {
    console.error("[otp] could not verify a code:", error);
    return NextResponse.json(
      { ok: false, message: "We could not check your code. Please try again." },
      { status: 500 },
    );
  }
}
