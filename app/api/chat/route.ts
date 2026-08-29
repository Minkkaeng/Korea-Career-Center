import { NextResponse } from "next/server";
import { getAppEnv } from "@/lib/cloudflare";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `당신은 한국진로커리어센터 웹사이트의 안내 챗봇입니다.
현재 연결 확인 단계이므로 사용자의 질문에 간결한 한국어로 답하세요.
확인되지 않은 센터 정보, 가격, 일정, 연락처를 만들어내지 마세요.
센터의 확정 데이터가 필요한 질문에는 온라인 상담 신청을 안내하세요.`;

export async function POST(request: Request) {
  let body: { message?: unknown };

  try {
    body = (await request.json()) as { message?: unknown };
  } catch {
    return NextResponse.json({ error: "요청 형식이 올바르지 않습니다." }, { status: 400 });
  }

  const message = typeof body.message === "string" ? body.message.trim().slice(0, 1000) : "";
  if (!message) {
    return NextResponse.json({ error: "질문을 입력해 주세요." }, { status: 400 });
  }

  const env = await getAppEnv();
  const apiKey = env.ANTHROPIC_API_KEY;
  const model = env.ANTHROPIC_MODEL || "claude-haiku-4-5";
  const workspaceId = env.ANTHROPIC_WORKSPACE_ID;

  if (!apiKey) {
    return NextResponse.json({ error: "챗봇 API가 설정되지 않았습니다." }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        ...(workspaceId ? { "anthropic-workspace-id": workspaceId } : {}),
      },
      body: JSON.stringify({
        model,
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: message }],
      }),
    });

    if (!response.ok) {
      console.error("Anthropic API request failed.", response.status, await response.text());
      return NextResponse.json({ error: "챗봇 응답을 불러오지 못했습니다." }, { status: 502 });
    }

    const data = (await response.json()) as { content?: Array<{ type?: string; text?: string }> };
    const answer = data.content?.find((item) => item.type === "text")?.text?.trim();

    if (!answer) {
      return NextResponse.json({ error: "챗봇 응답이 비어 있습니다." }, { status: 502 });
    }

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Anthropic API request failed.", error);
    return NextResponse.json({ error: "챗봇 연결 중 오류가 발생했습니다." }, { status: 502 });
  }
}
