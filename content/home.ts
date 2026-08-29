export const programs = [
  {
    slug: "youth-employment",
    number: "01",
    title: "청년 취업역량강화과정",
    subtitle: "",
    label: "청년·구직자",
    summary: "취업 준비의 방향을 점검하고 필요한 역량을 단계적으로 준비하는 과정입니다.",
    tone: "blue",
  },
  {
    slug: "ai-career-counseling",
    number: "02",
    title: "AI 활용 진로상담",
    subtitle: "Job Care형 상담",
    label: "진로 탐색",
    summary: "AI 진단 도구와 전문 상담을 결합해 개인에게 맞는 진로 방향을 함께 찾습니다.",
    tone: "mint",
  },
  {
    slug: "corporate-recruiting",
    number: "03",
    title: "기업 채용 컨설팅",
    subtitle: "",
    label: "기업 담당자",
    summary: "기업의 채용 과제와 인재 요구를 살펴보고 적합한 채용 방향을 지원합니다.",
    tone: "violet",
  },
  {
    slug: "commissioned-education",
    number: "04",
    title: "특강·위탁교육",
    subtitle: "폴리텍·대학 등",
    label: "대학·공공기관",
    summary: "기관의 교육 목적과 대상에 맞춘 특강 및 위탁교육을 준비합니다.",
    tone: "amber",
  },
] as const;

export const partners = [
  {
    name: "중랑구여성인력개발센터",
    description: "여성 구직자의 직업교육과 취업연계를 지원하는 기관과 협력하여, 경력단절 여성 등 다양한 대상층에 맞춤형 진로상담 서비스를 제공합니다.",
  },
  {
    name: "한국폴리텍대학 로봇캠퍼스",
    description: "로봇·자동화(AX) 분야 실습 인프라와 연계해, AI·로봇산업 진출을 희망하는 구직자에게 실습 기반 취업교육을 제공합니다.",
  },
  {
    name: "성남시청 (성남시일자리센터)",
    description: "지역 일자리 정책과 연계한 청년 취업지원 프로그램을 공동 운영하며, 지역 특화 고용서비스 모델을 함께 구축해가고 있습니다.",
  },
  {
    name: "두드림IT교육원",
    description: "IT 분야 교육과정 및 채용 컨설팅 노하우를 공유하며, 기업 맞춤형 인재양성 프로그램을 함께 운영합니다.",
  },
] as const;

export const openingNotice = {
  title: "한국진로커리어센터 홈페이지를 오픈합니다",
  date: "2026.01",
  paragraphs: [
    "안녕하세요, 한국진로커리어센터입니다.",
    "저희 센터는 AI 시대 변화하는 취업환경 속에서, 한 사람 한 사람에게 맞는 진로 방향을 함께 찾아가는 것을 목표로 2026년 1월 문을 열었습니다. 직업상담사·평생교육사·사회복지사 자격을 갖춘 전문 인력이 AI 진단 도구와 1:1 심층상담을 결합해, 실질적인 취업 연계까지 함께합니다.",
    "이번 홈페이지 오픈을 통해 센터의 프로그램과 협력기관 소식을 한 곳에서 확인하실 수 있습니다.",
    "앞으로도 지역과 기업, 구직자를 잇는 실질적인 고용서비스 기관으로 성장해가겠습니다. 많은 관심과 이용 부탁드립니다.",
  ],
} as const;
