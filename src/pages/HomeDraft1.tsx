import { ArrowRight, BookOpen, Users, BrainCircuit, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import NoticePopup from '../components/NoticePopup';

export default function HomeDraft1() {
  return (
    <div className="w-full">
      <NoticePopup />
      
      {/* Hero Section */}
      <section className="relative px-8 pt-20 pb-24 lg:pt-32 lg:pb-32 bg-bg-sub overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--accent) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-accent font-bold text-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            신뢰받는 공공 진로 파트너
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-text-main leading-[1.2] mb-6 tracking-tight">
            전문성과 데이터로 설계하는<br />
            <span className="text-accent">성공적인 커리어 여정</span>
          </h1>
          <p className="text-lg lg:text-xl text-text-sub max-w-2xl mb-10 leading-relaxed font-medium">
            한국진로커리어센터는 체계적인 교육과 심층 상담을 통해<br />
            당신의 잠재력을 발굴하고 목표에 도달할 수 있도록 돕습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/apply" className="px-8 py-4 bg-accent text-white font-bold rounded-xl shadow-lg shadow-accent/20 hover:bg-accent-sub transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5">
              상담 예약하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/programs/youth" className="px-8 py-4 bg-white text-text-main font-bold rounded-xl border border-gray-200 hover:border-accent/50 hover:bg-gray-50 transition-all flex items-center justify-center">
              프로그램 둘러보기
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="py-20 px-8 bg-bg-main relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-text-main mb-2">맞춤형 진로 프로그램</h2>
              <p className="text-text-sub">대상별 최적화된 솔루션을 제공합니다.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '청년 취업강화', icon: Users, desc: '실무 맞춤형 역량 강화 교육', link: '/programs/youth', color: 'var(--accent)' },
              { title: 'AI 진로상담', icon: BrainCircuit, desc: 'Job Care 빅데이터 기반 분석', link: '/programs/ai-consulting', color: 'var(--accent)' },
              { title: '기업 컨설팅', icon: LineChart, desc: '과학적 인재 채용 전략 수립', link: '/programs/corporate', color: 'var(--accent)' },
              { title: '특강·위탁교육', icon: BookOpen, desc: '기관 맞춤형 전문 교육 과정', link: '/programs/special-lecture', color: 'var(--accent)' },
            ].map((prog, idx) => (
              <Link 
                key={idx} 
                to={prog.link}
                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(30,58,138,0.15)] hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-bg-sub rounded-xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
                  <prog.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-text-main mb-2">{prog.title}</h3>
                <p className="text-text-sub text-sm leading-relaxed">{prog.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-8 bg-accent text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="py-4 md:py-0">
              <div className="text-5xl font-black mb-2">95%</div>
              <div className="text-white/80 font-medium">평균 취업 성공률</div>
            </div>
            <div className="py-4 md:py-0">
              <div className="text-5xl font-black mb-2">10k+</div>
              <div className="text-white/80 font-medium">누적 프로그램 수료생</div>
            </div>
            <div className="py-4 md:py-0">
              <div className="text-5xl font-black mb-2">150+</div>
              <div className="text-white/80 font-medium">전국 제휴 파트너사</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
