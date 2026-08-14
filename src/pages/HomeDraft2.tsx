import { ArrowRight, BookOpen, Users, BrainCircuit, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomeDraft2() {
  return (
    <div className="w-full bg-bg-main min-h-screen text-text-main">
      {/* Hero Section */}
      <section className="relative px-8 pt-32 pb-32 lg:pt-48 lg:pb-48 overflow-hidden bg-bg-dark">
        {/* Neon Gradient Orbs */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-[var(--grad-1)] rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-[var(--grad-2)] rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--grad-3)] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-bg-secondary/30 border border-white/10 text-text-main text-sm font-bold mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--grad-1)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--grad-1)]"></span>
            </span>
            차세대 AI 커리어 솔루션
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-text-on-dark leading-[1.2] mb-8 tracking-tight">
            미래를 연결하는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--grad-1)] via-[var(--grad-2)] to-[var(--grad-4)]">
              초개인화 진로 탐색
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-text-on-dark-sub max-w-2xl mb-12 leading-relaxed font-medium">
            최신 AI 데이터 분석을 기반으로 당신의 커리어 패스를 완벽하게 예측하고,<br />가장 혁신적인 성장의 길을 안내합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link to="/apply" className="px-8 py-4 bg-accent text-text-on-dark font-black rounded-xl transition-all shadow-[0_0_30px_rgba(27,85,116,0.4)] hover:shadow-[0_0_50px_rgba(27,85,116,0.6)] flex items-center justify-center gap-2 group hover:-translate-y-1">
              AI 상담 시작하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="py-20 px-8 relative z-20 bg-bg-main border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: '청년 취업강화', icon: Users, desc: '실무 맞춤형 역량 강화 교육', link: '/programs/youth', color: 'var(--grad-1)' },
              { title: 'AI 진로상담', icon: BrainCircuit, desc: 'Job Care 빅데이터 기반 분석', link: '/programs/ai-consulting', color: 'var(--grad-2)' },
              { title: '기업 컨설팅', icon: LineChart, desc: '과학적 인재 채용 전략 수립', link: '/programs/corporate', color: 'var(--grad-4)' },
              { title: '특강·위탁교육', icon: BookOpen, desc: '기관 맞춤형 전문 교육 과정', link: '/programs/special-lecture', color: 'var(--grad-5)' },
            ].map((prog, idx) => (
              <Link 
                key={idx} 
                to={prog.link}
                className="group p-10 rounded-3xl bg-bg-secondary/20 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-bg-secondary/40 shadow-xl relative overflow-hidden flex items-start gap-6"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `radial-gradient(circle at top right, ${prog.color}, transparent 70%)` }}></div>
                
                <div className="w-16 h-16 shrink-0 bg-bg-dark rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform relative z-10 border border-white/5" style={{ color: prog.color, boxShadow: `0 0 20px ${prog.color}40` }}>
                  <prog.icon className="w-8 h-8" />
                </div>
                <div className="relative z-10 pt-2">
                  <h3 className="text-2xl font-bold text-text-on-dark mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-colors" style={{ backgroundImage: `linear-gradient(to right, ${prog.color}, #ffffff)` }}>{prog.title}</h3>
                  <p className="text-text-on-dark-sub text-lg leading-relaxed">{prog.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 px-8 bg-bg-primary text-text-on-dark">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 text-white">데이터가 증명하는<br/>압도적 성과</h2>
            <p className="text-white/80 text-lg mb-8">오직 실력과 데이터로 결과를 만듭니다.</p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-black text-bg-main mb-2">95%</div>
                <div className="text-white/90 font-medium">취업 매칭률</div>
              </div>
              <div>
                <div className="text-4xl font-black text-bg-main mb-2">10k+</div>
                <div className="text-white/90 font-medium">누적 데이터베이스</div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-full aspect-square rounded-full bg-bg-main opacity-20 blur-3xl absolute"></div>
            <div className="w-full aspect-video bg-bg-dark/50 backdrop-blur-xl border border-white/20 rounded-2xl relative z-10 p-8 flex items-center justify-center shadow-2xl">
              <BrainCircuit className="w-24 h-24 text-accent animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
