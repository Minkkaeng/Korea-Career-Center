import { Target, Lightbulb, Users, ShieldCheck, ArrowRight, Network } from 'lucide-react';
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
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1e3a8a]/5 text-[#1e3a8a] border border-[#1e3a8a]/10 font-bold text-xs tracking-widest mb-6 uppercase rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a]"></span>
              About Center
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-slate-900 leading-[1.2] mb-6 tracking-tight">
              성공적인 비즈니스를 위한 <br className="hidden md:block"/>
              <span className="text-[#1e3a8a]">신뢰할 수 있는 파트너</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              한국진로커리어센터는 수년간 축적된 산업 데이터와 검증된 컨설팅 방법론을 바탕으로 개인의 역량 강화와 기업의 인재 확보를 동시에 지원합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/programs/ai-consulting" className="px-8 py-4 bg-[#1e3a8a] text-white font-bold rounded shadow-md hover:shadow-lg hover:bg-[#1e40af] transition-all duration-300 flex items-center gap-2">
                컨설팅 시작하기 <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white text-slate-700 font-bold rounded border border-slate-200 hover:bg-slate-50 transition-all duration-300">
                오시는 길
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Greeting Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <h2 className="text-3xl lg:text-[40px] font-black text-slate-900 mb-6 leading-tight">
                  "데이터와 현장 경험의 결합으로 가장 확실한 솔루션을 제공합니다."
                </h2>
                <div className="h-1 w-16 bg-[#1e3a8a] mb-6"></div>
                <p className="text-lg font-bold text-slate-900">센터장 올림</p>
                <p className="text-slate-500">한국진로커리어센터</p>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-6 text-slate-600 text-[17px] leading-[1.8]">
              <p>
                안녕하십니까, 한국진로커리어센터를 찾아주신 여러분을 진심으로 환영합니다.
              </p>
              <p>
                최근 산업 환경은 급격하게 변화하고 있으며, 그에 따라 요구되는 인재상과 직무 역량 역시 빠르게 고도화되고 있습니다. 
                과거의 천편일률적인 방식으로는 치열한 비즈니스 환경에서 우위를 점하기 어렵습니다.
              </p>
              <p>
                저희 센터는 철저한 <strong>데이터 분석에 기반한 객관적인 평가</strong>와 
                <strong>현장 전문가들의 통찰력</strong>을 결합하여, 단순한 조언을 넘어 실제 성과로 이어지는 컨설팅을 제공합니다.
              </p>
              <p>
                개인 고객에게는 본인의 잠재력을 극대화할 수 있는 커리어 로드맵을, 
                기업 고객에게는 조직 성장을 견인할 최적의 인재 채용 및 육성 솔루션을 약속드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#1e3a8a] font-bold tracking-widest text-sm mb-3 block uppercase">Core Values</span>
            <h2 className="text-3xl md:text-[42px] font-black text-slate-900">우리의 핵심 가치</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: '정확성', desc: '데이터와 근거에 기반한 객관적이고 과학적인 분석 시스템' },
              { icon: Lightbulb, title: '전문성', desc: '각 산업 분야별 최고 수준의 컨설턴트 및 멘토진' },
              { icon: Network, title: '파트너십', desc: '고객의 성공을 최우선으로 생각하는 동반성장 생태계' },
              { icon: ShieldCheck, title: '신뢰성', desc: '투명하고 검증된 프로세스를 통한 최상의 결과 보장' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <value.icon className="w-10 h-10 text-[#1e3a8a] mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
