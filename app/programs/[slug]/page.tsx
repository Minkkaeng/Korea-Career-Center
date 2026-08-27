import type { Metadata } from "next";
import { ApprovedDesignHost } from "@/components/ApprovedDesignHost";

const titles: Record<string, string> = {
  youth: "청년 취업역량강화",
  ai: "AI 활용 진로상담",
  corporate: "기업 채용 컨설팅",
  special: "특강·위탁교육",
  "youth-career-empowerment": "청년 취업역량강화",
  "ai-career-counseling": "AI 활용 진로상담",
  "corporate-recruitment-consulting": "기업 채용 컨설팅",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: titles[slug] ?? "프로그램" };
}

export default function ApprovedProgramPage() {
  return <ApprovedDesignHost />;
}
