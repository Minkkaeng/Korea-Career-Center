import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Info, Users, BookOpen, Briefcase, Bell, MapPin } from 'lucide-react';
import logoUrl from '../assets/logo.png';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'HOME', icon: Home },
    { path: '/about', label: '센터소개', icon: Info },
    { path: '/organization', label: '조직도', icon: Users },
    { path: '/programs/youth', label: '프로그램 안내', icon: BookOpen },
    { path: '/partners', label: '협력기관', icon: Briefcase },
    { path: '/notices', label: '공지사항 / 소식', icon: Bell },
    { path: '/contact', label: '오시는 길 · 문의', icon: MapPin },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {!isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(true)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen transition-all duration-300 ease-in-out bg-bg-dark border-r border-white/10
          ${isOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="h-24 flex items-center justify-between px-6 border-b border-white/10 shrink-0">
            {isOpen && (
              <Link to="/" className="flex items-center gap-3 group">
                <img src={logoUrl} alt="한국진로커리어센터 로고" className="h-10 w-auto drop-shadow-md group-hover:scale-105 transition-transform" />
                <span className="font-extrabold text-sm tracking-tight text-text-on-dark truncate hover:text-accent transition-colors">
                  한국진로커리어센터
                </span>
              </Link>
            )}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-white/10 text-text-on-dark-sub hover:text-text-on-dark transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-2 scrollbar-hide">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200
                    ${isActive 
                      ? 'bg-accent text-white shadow-lg shadow-accent/20 font-bold' 
                      : 'text-text-on-dark-sub hover:bg-white/5 hover:text-text-on-dark'
                    }
                  `}
                  title={!isOpen ? item.label : undefined}
                >
                  <item.icon className={`w-5 h-5 shrink-0 ${isActive ? 'animate-pulse' : ''}`} />
                  {isOpen && (
                    <span className="truncate">{item.label}</span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Action */}
          <div className="mt-auto p-4 border-t border-white/10 shrink-0">
            {isOpen ? (
              <Link 
                to="/apply"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 bg-accent hover:opacity-90 text-white font-black rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
              >
                상담·교육 신청
              </Link>
            ) : (
              <Link 
                to="/apply"
                className="flex items-center justify-center w-12 h-12 mx-auto bg-accent hover:opacity-90 text-white font-black rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
                title="상담·교육 신청"
              >
                <BookOpen className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      {isOpen && (
        <button 
          onClick={() => setIsOpen(false)}
          className="fixed top-4 left-4 z-50 p-3 bg-bg-dark text-text-on-dark rounded-xl shadow-xl lg:hidden hover:bg-accent transition-colors border border-white/10"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
