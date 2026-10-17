import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  message?: string;
};

export async function POST(request: Request) {
  const formId = process.env.FORMSPREE_FORM_ID?.trim();
  if (!formId) {
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const budget = body.budget?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  const subject = `Project inquiry from ${name}${company ? ` — ${company}` : ""}`;

  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      company: company || "—",
      budget: budget || "—",
      message,
      _subject: subject,
      _replyto: email,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
