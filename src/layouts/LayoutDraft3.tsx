import { useState, useEffect } from 'react';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import logoUrl from '../assets/logo.png';

function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-[1240px] mx-auto px-6 h-[80px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoUrl} alt="한국진로커리어센터" className="h-[42px] w-auto transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-black text-xl leading-none tracking-tight text-[#0f172a]">한국진로</span>
            <span className="text-[11px] font-bold tracking-widest text-slate-500 mt-0.5">커리어센터</span>
          </div>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-9">
          {[
            { name: '센터 안내', path: '/about' },
            { name: '프로그램', path: '/programs/youth' },
            { name: '협력기관', path: '/partners' },
            { name: '직업정보', path: '/job-info' },
            { name: '공지·소식', path: '/notices' },
            { name: '오시는 길', path: '/contact' }
          ].map((item) => {
            const isActive = location.pathname.startsWith(item.path.split('/')[1] ? `/${item.path.split('/')[1]}` : item.path);
            return (
              <Link 
                key={item.path}
                to={item.path} 
                className={`font-semibold text-[15px] transition-colors hover:text-[#1d4ed8] ${isActive ? 'text-[#1d4ed8]' : 'text-slate-600'}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <Link to="/apply" className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded border-2 border-[#1e3a8a] text-[#1e3a8a] font-bold text-sm transition-all hover:bg-[#1e3a8a] hover:text-white">
          상담·교육 신청
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-20 pb-12 border-t-4 border-[#1e3a8a]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
          <div className="lg:max-w-sm">
            <h2 className="text-2xl font-black mb-6 text-white tracking-tight">한국진로커리어센터</h2>
            <p className="text-slate-400 leading-relaxed text-[15px] mb-8">
              데이터 기반의 초개인화 진로 분석과 맞춤형 커리어 컨설팅으로 성공적인 비즈니스와 커리어를 지원합니다.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-slate-600 px-6 py-3 rounded text-sm font-semibold hover:bg-white hover:text-[#0f172a] hover:border-white transition-colors">
              문의하기 ↗
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
            <div className="space-y-4 flex flex-col">
              <h3 className="text-white font-bold mb-2 tracking-wide">센터 안내</h3>
              <Link to="/about" className="hover:text-white transition-colors">센터소개</Link>
              <Link to="/organization" className="hover:text-white transition-colors">조직도</Link>
              <Link to="/partners" className="hover:text-white transition-colors">협력기관</Link>
              <Link to="/job-info" className="hover:text-white transition-colors">직업정보</Link>
              <Link to="/notices" className="hover:text-white transition-colors">공지·소식</Link>
            </div>
            <div className="space-y-4 flex flex-col">
              <h3 className="text-white font-bold mb-2 tracking-wide">프로그램</h3>
              <Link to="/programs/youth" className="hover:text-white transition-colors">청년 역량강화</Link>
              <Link to="/programs/ai-consulting" className="hover:text-white transition-colors">AI 진로상담</Link>
              <Link to="/programs/corporate" className="hover:text-white transition-colors">기업 컨설팅</Link>
              <Link to="/programs/special-lecture" className="hover:text-white transition-colors">특강·위탁교육</Link>
            </div>
            <div className="space-y-4 flex flex-col">
              <h3 className="text-white font-bold mb-2 tracking-wide">고객지원</h3>
              <span className="text-slate-400">02-1234-5678</span>
              <span className="text-slate-400">contact@career.kr</span>
              <span className="text-slate-400 mt-2 block">평일 09:00 - 18:00</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between text-slate-500 text-xs">
          <p>© 2026 Korea Career Center. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white transition-colors">개인정보처리방침</span>
            <span className="cursor-pointer hover:text-white transition-colors">이용약관</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LayoutDraft3() {
  return (
    <div className="min-h-screen bg-bg-main flex flex-col font-sans text-text-main selection:bg-accent/20">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
