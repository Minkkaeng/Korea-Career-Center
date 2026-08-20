import { UserCircle, Network } from 'lucide-react';

export default function Organization() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-32">
      {/* Hero */}
      <div className="hidden">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <span className="text-[#1e3a8a] font-bold tracking-widest text-sm mb-4 block uppercase">Organization</span>
          <h1 className="text-4xl md:text-[42px] font-black text-slate-900 mb-6 tracking-tight">조직도</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto break-keep">
            분야별 최고의 전문가들이 체계적으로 협력하여 최상의 교육 및 상담 서비스를 제공합니다.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 mt-8 relative">
        <div className="relative max-w-4xl mx-auto">
          {/* CEO Level */}
          <div className="flex justify-center mb-16 relative">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 w-72 text-center relative z-10 shadow-lg hover:-translate-y-1 transition-transform">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-[#1e3a8a] mb-5">
                <UserCircle className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">이름</h2>
              <p className="text-sm font-bold text-[#1e3a8a] bg-blue-50 py-1.5 rounded-full inline-block px-4">담당업무 혹은 커리어</p>
            </div>
            {/* Connector Down */}
            <div className="absolute top-full left-1/2 w-0.5 h-16 bg-slate-300 -translate-x-1/2 hidden md:block"></div>
          </div>

          {/* Horizontal Line for departments */}
          <div className="absolute top-[210px] left-1/4 right-1/4 h-0.5 bg-slate-300 hidden md:block"></div>

          {/* Departments Level */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector Down for Desktop */}
            <div className="absolute -top-16 left-[16.66%] w-0.5 h-16 bg-slate-300 hidden md:block"></div>
            <div className="absolute -top-16 left-1/2 w-0.5 h-16 bg-slate-300 hidden md:block"></div>
            <div className="absolute -top-16 left-[83.33%] w-0.5 h-16 bg-slate-300 hidden md:block"></div>

            {[
              {
                name: '기획운영팀',
                role: '경영지원 / 홍보마케팅',
                tasks: ['센터 중장기 발전 계획 수립', '온·오프라인 홍보 및 브랜드', '예산 및 인력 관리']
              },
              {
                name: '교육진로팀',
                role: '프로그램 기획 / 강사 관리',
                tasks: ['4차 산업혁명 특화 교육 개발', 'AI 맞춤형 진로상담 기획', '전문 강사 풀(Pool) 운영']
              },
              {
                name: '취업지원팀',
                role: '채용연계 / 사후관리',
                tasks: ['협력 기업 발굴 및 매칭', '이력서·면접 컨설팅', '수료생 사후 취업 트래킹']
              }
            ].map((dept, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#1e3a8a] hover:shadow-lg transition-all duration-300 relative z-10 group">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-500 mb-6 group-hover:text-[#1e3a8a] group-hover:bg-blue-50 transition-colors">
                  <Network className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{dept.name}</h3>
                <p className="text-sm font-bold text-slate-500 mb-6">{dept.role}</p>
                
                <ul className="space-y-4">
                  {dept.tasks.map((task, tidx) => (
                    <li key={tidx} className="flex items-start gap-3 text-[15px] text-slate-600 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] mt-2.5 shrink-0"></div>
                      <span className="leading-snug break-keep">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
