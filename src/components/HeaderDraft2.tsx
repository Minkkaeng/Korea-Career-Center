import { Link, NavLink } from 'react-router-dom';
import logoUrl from '../assets/logo.png';

export default function HeaderDraft2() {
  const navItems = [
    { path: '/about', label: '센터소개' },
    { path: '/organization', label: '조직도' },
    { path: '/programs/youth', label: '프로그램 안내' },
    { path: '/partners', label: '협력기관' },
    { path: '/notices', label: '공지사항 / 소식' },
    { path: '/contact', label: '오시는 길 · 문의' },
  ];

  return (
    <header className="fixed z-50 top-4 left-4 right-4 lg:top-8 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:w-full lg:max-w-6xl transition-transform duration-300">
      <div className="bg-bg-sub/90 backdrop-blur-lg border border-white/10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logoUrl} alt="한국진로커리어센터 로고" className="h-10 w-auto drop-shadow-md hover:scale-105 transition-transform" />
          <span className="font-extrabold text-text-main tracking-tight">한국진로커리어센터</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                text-sm font-semibold transition-colors
                ${isActive ? 'text-accent' : 'text-text-sub hover:text-text-main'}
              `}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Call to action */}
        <div className="flex items-center gap-4">
          <Link 
            to="/apply" 
            className="hidden lg:flex px-6 py-2.5 bg-accent hover:opacity-80 text-bg-main text-sm font-extrabold rounded-full transition-all shadow-[0_4px_15px_rgba(0,200,151,0.3)] hover:-translate-y-0.5"
          >
            상담·교육 신청
          </Link>
          
          {/* Mobile menu button */}
          <button className="lg:hidden p-2 text-text-main">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
