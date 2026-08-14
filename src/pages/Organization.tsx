import { UserCircle, Network } from 'lucide-react';

export default function Organization() {
  return (
    <div className="p-8 lg:p-16 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-text-main mb-6">조직도</h1>
        <p className="text-lg text-text-sub">
          분야별 최고의 전문가들이 체계적으로 협력하여 최상의 교육 및 상담 서비스를 제공합니다.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* CEO Level */}
        <div className="flex justify-center mb-16 relative">
          <div className="bg-bg-sub border-2 border-accent rounded-2xl p-8 w-64 text-center relative z-10 shadow-[0_0_30px_rgba(0,200,151,0.2)]">
            <div className="w-16 h-16 mx-auto bg-bg-main rounded-full flex items-center justify-center text-accent mb-4">
              <UserCircle className="w-10 h-10" />
            </div>
            <h2 className="text-xl font-bold text-text-main mb-1">센터장</h2>
            <p className="text-sm text-text-sub">최고 책임자</p>
          </div>
          {/* Connector Down */}
          <div className="absolute top-full left-1/2 w-0.5 h-16 bg-white/20 -translate-x-1/2"></div>
        </div>

        {/* Horizontal Line for departments */}
        <div className="absolute top-[200px] left-1/4 right-1/4 h-0.5 bg-white/20 hidden md:block"></div>

        {/* Departments Level */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Down for Desktop */}
          <div className="absolute -top-16 left-[16.66%] w-0.5 h-16 bg-white/20 hidden md:block"></div>
          <div className="absolute -top-16 left-1/2 w-0.5 h-16 bg-white/20 hidden md:block"></div>
          <div className="absolute -top-16 left-[83.33%] w-0.5 h-16 bg-white/20 hidden md:block"></div>

          {[
            {
              name: '기획운영팀',
              role: '경영지원 / 홍보마케팅',
              tasks: ['센터 중장기 발전 계획 수립', '대내외 홍보 및 브랜딩', '예산 및 인력 관리']
            },
            {
              name: '교육진로팀',
              role: '프로그램 기획 / 강사 관리',
              tasks: ['4차 산업혁명 특화 교육 개발', 'AI 맞춤형 진로상담 기획', '전문 강사진 풀(Pool) 운영']
            },
            {
              name: '취업지원팀',
              role: '채용연계 / 사후관리',
              tasks: ['협력 기업 발굴 및 매칭', '이력서/면접 컨설팅', '수료생 사후 취업 트래킹']
            }
          ].map((dept, idx) => (
            <div key={idx} className="bg-bg-sub/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/50 transition-colors duration-300 relative z-10 group">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-text-main mb-6 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-2">{dept.name}</h3>
              <p className="text-sm font-semibold text-accent-sub mb-6">{dept.role}</p>
              
              <ul className="space-y-3">
                {dept.tasks.map((task, tidx) => (
                  <li key={tidx} className="flex items-start gap-2 text-sm text-text-sub">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                    <span className="leading-snug">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
