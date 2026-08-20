import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  // 일반 부드러운 스크롤 (자동 스크롤 비활성화)
  useEffect(() => {
    document.documentElement.style.scrollSnapType = '';
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollSnapType = '';
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  // --- 일반 스크롤 애니메이션 변수 ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      
      {/* 
        Hero Section
      */}
      <section className="relative w-full h-screen bg-[#050B14] flex items-center justify-center overflow-hidden">
        
        {/* 동적 배경 */}
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src={`${import.meta.env.BASE_URL}images/hero.jpg`}
            alt="배경 이미지" 
            className="w-full h-full object-cover object-center mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B14]/70 to-[#050B14]" />
        </div>

        {/* 통합된 원본 텍스트 레이어 */}
        <motion.div 
          className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center text-white mt-16 flex flex-col items-center"
        >
            <motion.div 
              initial="hidden" animate="visible" variants={fadeInUp}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-300 text-sm font-bold mb-8 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              차세대 AI 커리어 솔루션
            </motion.div>

            <motion.h1 
              initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
              className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-black leading-[1.1] tracking-tight mb-8 drop-shadow-2xl"
            >
              미래를 연결하는<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">초개인화 진로 탐색</span>
            </motion.h1>
            
            <motion.p 
              initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-medium mb-12 drop-shadow-lg max-w-3xl leading-relaxed"
            >
              최신 AI 데이터 분석을 기반으로 당신의 커리어 패스를 예측하고,<br className="hidden md:block" />가장 혁신적인 성장의 길을 안내합니다.
            </motion.p>
            
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.3 }}>
              <Link 
                to="/apply" 
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#050B14] rounded-full font-black text-xl hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] group gap-2"
              >
                AI 상담 시작하기
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
      </section>

      {/* Feature 1: 간편한 상담 신청 */}
      <section className="relative w-full min-h-screen flex items-center py-32 md:py-48 bg-white z-10">
        <div className="max-w-[1400px] w-full mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] tracking-tight text-slate-900 mb-8">
              복잡한 진로 고민은<br/>
              <span className="text-blue-600">보다 쉽게.</span>
            </h2>
            <p className="text-xl md:text-3xl text-slate-500 font-medium leading-relaxed">
              몇 번의 클릭만으로 나에게 맞는 과정을 간편하게 선택하고<br className="hidden md:block"/>
              AI 상담부터 취업 연계까지 손쉽게 신청할 수 있어요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature 2: 맞춤형 프로그램 */}
      <section className="relative w-full min-h-screen flex items-center py-32 md:py-48 bg-slate-50 border-y border-slate-100 z-10">
        <div className="max-w-[1400px] w-full mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
          >
            <div className="w-full lg:w-1/2">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] tracking-tight text-slate-900 mb-8">
                한 번의 진단으로<br/>
                <span className="text-blue-600">나에게 딱 맞는<br/>프로그램 매칭.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-500 font-medium mb-12 leading-relaxed">
                마이페이지에서 내 진단 결과에 맞는<br/>가장 완벽한 커리어 패스를 확인하세요.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link to="/programs" className="inline-flex items-center gap-2 font-bold text-2xl text-slate-900 hover:text-blue-600 transition-colors">
                  프로그램 둘러보기 <ArrowRight className="w-8 h-8" />
                </Link>
              </motion.div>
            </div>
            
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-between hover:-translate-y-2 transition-transform duration-300">
                  <div>
                    <span className="text-sm md:text-base font-bold text-blue-600 mb-3 block">AI 진단 매칭 98%</span>
                    <h4 className="text-2xl md:text-4xl font-black">청년 취업역량강화</h4>
                  </div>
                  <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 shrink-0">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
                <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-between translate-x-0 lg:translate-x-12 hover:-translate-y-2 transition-transform duration-300">
                  <div>
                    <span className="text-sm md:text-base font-bold text-teal-600 mb-3 block">전문가 강력 추천</span>
                    <h4 className="text-2xl md:text-4xl font-black">기업 채용 컨설팅</h4>
                  </div>
                  <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 shrink-0">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature 3: 바로 시작하는 교육 */}
      <section className="relative w-full min-h-screen flex items-center py-32 md:py-48 bg-[#050B14] text-white z-10">
        <div className="max-w-[1400px] w-full mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] tracking-tight mb-8">
              대기 없이<br/>
              <span className="text-cyan-400">바로 시작하세요.</span>
            </h2>
            <p className="text-xl md:text-3xl text-slate-400 font-medium mb-24 leading-relaxed">
              선착순 마감 없는 상시 교육 과정으로<br className="hidden md:block"/>
              내 커리어 성장을 지금 당장 시작하세요.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
          >
            {[
              { id: '01', title: 'AI 기초 활용', desc: '직무 효율을 높이는 생성형 AI 실무' },
              { id: '02', title: '비즈니스 매너', desc: '입사 전 반드시 알아야 할 에티켓' },
              { id: '03', title: '이력서 코칭', desc: '인사담당자 눈에 띄는 자소서 작성법' },
            ].map((item) => (
              <motion.div key={item.id} variants={fadeInUp} className="bg-slate-800/30 p-10 md:p-12 rounded-[2rem] border border-slate-700/50 hover:bg-slate-800 transition-colors duration-500">
                <span className="text-5xl md:text-6xl font-black text-slate-700 mb-8 block">{item.id}</span>
                <h4 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h4>
                <p className="text-lg text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
