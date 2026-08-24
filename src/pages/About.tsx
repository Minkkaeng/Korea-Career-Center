import { Target, Lightbulb, Users, ShieldCheck, ArrowRight, Network, Rocket, Briefcase, Infinity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800">
      
      {/* Corporate Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.85]" style={{ backgroundImage: "url('/images/about2.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent opacity-80"></div>
        
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1e3a8a]/5 text-[#1e3a8a] border border-[#1e3a8a]/10 font-bold text-xs tracking-widest mb-6 uppercase rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a]"></span>
              About Center
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[50px] font-black text-slate-900 leading-[1.3] mb-6 tracking-tight break-keep">
              기술과 사람을 잇는 <br className="hidden md:block"/>
              <span className="text-[#1e3a8a]">미래 인재 양성 파트너</span>, <br className="hidden md:block"/>
              한국진로커리어센터
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-[1.8] mb-10 break-keep">
              한국진로커리어센터는 급변하는 4차 산업 기술 트렌드와 고용 시장에 발맞추어, 실무 역량 중심의 진로·취업 솔루션을 제공하는 전문 교육 기관입니다. 한국폴리텍대학 로봇캠퍼스 산학협력 및 지자체 일자리 거버넌스를 바탕으로, 공공기관과 기업이 신뢰하는 검증된 교육 인프라를 구축하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[#1e3a8a] font-bold tracking-widest text-sm mb-3 block uppercase">Our Solutions</span>
            <h2 className="text-3xl md:text-[40px] font-black text-slate-900 break-keep">미래를 준비하는 3가지 핵심 솔루션</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <Rocket className="w-8 h-8 text-[#1e3a8a]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 break-keep">신산업 맞춤형 인재 양성</h3>
              <p className="text-slate-500 text-[16px] leading-relaxed break-keep">
                4차 산업 및 기술 특화 인재를 위한 실무 특강 및 산학 연계 취업 캠프 운영
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-[#1e3a8a]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 break-keep">1:1 밀착형 역량 컨설팅</h3>
              <p className="text-slate-500 text-[16px] leading-relaxed break-keep">
                정밀 직무 분석, 합격 서류 완성, 실전 모의면접 클리닉
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <Infinity className="w-8 h-8 text-[#1e3a8a]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 break-keep">전 생애주기 일자리 솔루션</h3>
              <p className="text-slate-500 text-[16px] leading-relaxed break-keep">
                첫 진로를 설계하는 청년부터 산업 전환기 재도약을 준비하는 구직자까지 맞춤형 지원
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* History (연혁) Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-sm mb-4 block uppercase">History</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">센터 연혁</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto break-keep">
              기술과 사람을 잇는 곳, 한국진로커리어센터의 발자취입니다.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-4 border-blue-600 ml-6 md:ml-0 md:pl-0">
              
              <div className="mb-12 relative flex items-center md:justify-center">
                <div className="absolute w-4 h-4 rounded-full bg-blue-600 -left-[10px] md:left-1/2 md:-ml-2 ring-4 ring-blue-100"></div>
                <div className="pl-8 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-2xl font-black text-[#1e3a8a] mb-2">2026. 01. 23</h3>
                  <p className="text-lg font-bold text-slate-900">한국진로커리어센터 설립</p>
                  <p className="text-slate-600 mt-2">대표이사 겸 센터장 체제 출범</p>
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12"></div>
              </div>

              <div className="mb-12 relative flex items-center md:justify-center">
                <div className="absolute w-4 h-4 rounded-full bg-blue-600 -left-[10px] md:left-1/2 md:-ml-2 ring-4 ring-blue-100"></div>
                <div className="hidden md:block md:w-1/2 md:pr-12"></div>
                <div className="pl-8 md:pl-0 md:w-1/2 md:pl-12 text-left">
                  <h3 className="text-2xl font-black text-[#1e3a8a] mb-2">2026. 05 ~</h3>
                  <p className="text-lg font-bold text-slate-900">교육 및 공공기관 협력 확대</p>
                  <p className="text-slate-600 mt-2 break-keep">
                    · 중랑여성인력개발센터 AI·디지털 위원회 위촉<br/>
                    · 성남시일자리센터 및 한국폴리텍대학 등 주요 기관 업무협약 체결
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-24 bg-[#050B14] text-white">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-[40px] lg:text-[48px] font-black leading-[1.4] tracking-tight break-keep">
              막연한 조언 대신<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">실전에 바로 쓰이는 전략</span>을 제시합니다.
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed break-keep">
              구직자에게는 든든한 커리어 러닝메이트로,<br className="hidden md:block" />
              기관 및 기업에는 최적의 고용 성과를 창출하는 신뢰의 파트너로 함께 하겠습니다.
            </p>
            <div className="pt-8">
              <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#050B14] rounded-full font-bold text-lg hover:bg-cyan-400 transition-colors duration-300 gap-2 group">
                파트너십 문의하기 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
