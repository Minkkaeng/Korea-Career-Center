import { Link } from 'react-router-dom';
import { ChevronRight, Target, Users, BookOpen, Presentation, CheckCircle2 } from 'lucide-react';

export default function HomeDraft3() {
  return (
    <div className="w-full bg-slate-50 font-sans antialiased text-slate-800">
      
      {/* Premium Corporate Hero Section */}
      <section className="relative h-[min(700px,calc(100vh-80px))] min-h-[600px] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-cover bg-[64%_center] opacity-[0.85]" style={{ backgroundImage: "url('/images/hero2.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent opacity-80"></div>
        
        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6">
          <div className="max-w-[700px]">
            <span className="inline-flex items-center gap-2 text-[#1e3a8a] text-[12px] font-bold tracking-widest uppercase mb-4 px-3 py-1 bg-[#1e3a8a]/5 rounded-sm border border-[#1e3a8a]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] animate-pulse"></span>
              Professional Career Consulting
            </span>
            <h1 className="text-[clamp(40px,5vw,60px)] leading-[1.15] tracking-[-0.03em] font-black text-slate-900 mb-6">
              데이터와 전문성으로<br/>
              <span className="text-[#1e3a8a]">성공적인 커리어</span>를 설계합니다.
            </h1>
            <p className="text-[17px] leading-[1.7] text-slate-600 mb-10 max-w-xl">
              최고의 전문가 그룹이 제공하는 초개인화 진단 도구와 현장 맞춤형 솔루션. 당신의 비즈니스와 커리어의 다음 단계를 완벽하게 준비하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply" className="px-8 py-4 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold rounded shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                컨설팅 문의하기 <ChevronRight className="w-4 h-4" />
              </Link>
              <Link to="/programs" className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded border border-slate-200 transition-all flex items-center justify-center">
                프로그램 안내
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition / Quick Links */}
      <section className="relative z-20 -mt-16 pb-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: '정확한 진단', desc: '데이터 기반의 객관적인 커리어 역량 평가 솔루션' },
              { icon: Users, title: '전문가 매칭', desc: '산업별 최고 수준의 멘토 및 컨설턴트 1:1 매칭' },
              { icon: Presentation, title: '기업 솔루션', desc: '조직 성장과 인재 채용을 위한 프리미엄 B2B 컨설팅' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <feature.icon className="w-10 h-10 text-[#1e3a8a] mb-5" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          <header className="mb-14 max-w-2xl">
            <h2 className="text-[36px] font-black tracking-tight text-slate-900 mb-4">프리미엄 컨설팅 영역</h2>
            <p className="text-slate-500 text-lg">개인과 기업의 성장을 위한 체계적이고 전문적인 프로그램을 제공합니다.</p>
          </header>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/programs/ai-consulting" className="group block bg-slate-50 border border-slate-200 rounded-lg p-10 hover:border-[#1e3a8a] hover:bg-white transition-all">
              <div className="flex justify-between items-start mb-16">
                <div>
                  <span className="text-sm font-bold text-[#1e3a8a] mb-2 block">For Individuals</span>
                  <h3 className="text-3xl font-black text-slate-900">1:1 커리어 컨설팅</h3>
                </div>
                <div className="w-12 h-12 rounded bg-white shadow-sm flex items-center justify-center text-[#1e3a8a] group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors">
                  <ArrowRightIcon />
                </div>
              </div>
              <ul className="space-y-3">
                {['AI 기반 역량 및 적성 진단', '산업 맞춤형 이력서 및 포트폴리오 첨삭', '실전 모의 면접 및 피드백'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Link>

            <Link to="/programs/corporate" className="group block bg-slate-50 border border-slate-200 rounded-lg p-10 hover:border-[#1e3a8a] hover:bg-white transition-all">
              <div className="flex justify-between items-start mb-16">
                <div>
                  <span className="text-sm font-bold text-[#1e3a8a] mb-2 block">For Business</span>
                  <h3 className="text-3xl font-black text-slate-900">기업 채용 컨설팅</h3>
                </div>
                <div className="w-12 h-12 rounded bg-white shadow-sm flex items-center justify-center text-[#1e3a8a] group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors">
                  <ArrowRightIcon />
                </div>
              </div>
              <ul className="space-y-3">
                {['기업 맞춤형 인재상 및 평가 지표 설계', '구조화 면접 도구 및 질문지 개발', '면접관 전문성 강화 교육(특강)'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-[1240px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-[42px] font-black leading-tight mb-6">검증된 전문성으로<br/>결과를 증명합니다.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              수많은 기업과 개인 고객이 한국진로커리어센터와 함께 새로운 가능성을 발견했습니다. 우리는 끊임없는 연구와 데이터를 바탕으로 가장 확실한 솔루션을 제안합니다.
            </p>
            <Link to="/about" className="inline-flex font-bold text-[#60a5fa] hover:text-white transition-colors items-center gap-2 border-b border-[#60a5fa] hover:border-white pb-1">
              센터 소개 상세보기 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="border-l-2 border-slate-700 pl-6">
              <div className="text-4xl font-black mb-2">98<span className="text-[#60a5fa]">%</span></div>
              <div className="text-slate-400 font-medium">컨설팅 만족도</div>
            </div>
            <div className="border-l-2 border-slate-700 pl-6">
              <div className="text-4xl font-black mb-2">1.5<span className="text-[#60a5fa]">K+</span></div>
              <div className="text-slate-400 font-medium">누적 컨설팅 횟수</div>
            </div>
            <div className="border-l-2 border-slate-700 pl-6">
              <div className="text-4xl font-black mb-2">45<span className="text-[#60a5fa]">+</span></div>
              <div className="text-slate-400 font-medium">제휴 기업 및 기관</div>
            </div>
            <div className="border-l-2 border-slate-700 pl-6">
              <div className="text-4xl font-black mb-2">12<span className="text-[#60a5fa]">Y</span></div>
              <div className="text-slate-400 font-medium">산업별 전문 경력</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-[36px] font-black tracking-tight text-slate-900 mb-6">성공적인 커리어 설계의 시작</h2>
          <p className="text-slate-500 text-lg mb-10">전문 컨설턴트와의 상담을 통해 지금 가장 필요한 솔루션을 확인하세요.</p>
          <Link to="/apply" className="inline-flex px-10 py-4 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold rounded shadow-lg transition-all text-lg">
            온라인 상담 예약하기
          </Link>
        </div>
      </section>
    </div>
  );
}

function ArrowRightIcon() {
  return <ChevronRight className="w-6 h-6" />;
}
