import { NextResponse } from "next/server";
import { getAppEnv } from "@/lib/cloudflare";

export const runtime = "nodejs";

const MAX_LENGTH = {
  name: 100,
  phone: 30,
  email: 254,
  content: 5000,
} as const;

function readText(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "요청 형식이 올바르지 않습니다." }, { status: 400 });
  }

  if (readText(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const type = body.type === "education" ? "education" : "counseling";
  const name = readText(body.name, MAX_LENGTH.name);
  const phone = readText(body.phone, MAX_LENGTH.phone);
  const email = readText(body.email, MAX_LENGTH.email);
  const content = readText(body.content, MAX_LENGTH.content);
  const privacy = body.privacy === true;

  if (!name || !phone || !content || !privacy) {
    return NextResponse.json({ error: "필수 입력값을 확인해 주세요." }, { status: 400 });
  }

  if (!/^[0-9-]{9,13}$/.test(phone) || (email && !/^\S+@\S+\.\S+$/.test(email))) {
    return NextResponse.json({ error: "연락처 또는 이메일 형식을 확인해 주세요." }, { status: 400 });
  }

  const env = await getAppEnv();
  const destination = env.CONTACT_EMAIL_TO;
  const sender = env.CONTACT_EMAIL_FROM;

  if (!env.CONTACT_EMAIL || !destination || !sender) {
    console.error("Cloudflare contact email binding is not configured.");
    return NextResponse.json({ error: "문의 접수 기능을 준비 중입니다." }, { status: 503 });
  }

  const category = type === "education" ? "교육/제휴 문의" : "개인 상담 신청";
  const message = [
    `[${category}]`,
    "",
    `이름/기관: ${name}`,
    `연락처: ${phone}`,
    `이메일: ${email || "미입력"}`,
    "",
    "문의 내용",
    content,
  ].join("\n");

  try {
    await env.CONTACT_EMAIL.send({
      to: destination,
      from: sender,
      subject: `[한국진로커리어센터] ${category} - ${name}`,
      text: message,
      ...(email ? { replyTo: email } : {}),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email delivery failed.", error);
    return NextResponse.json({ error: "문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요." }, { status: 502 });
  }
}
