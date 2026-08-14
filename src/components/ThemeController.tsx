import { useThemeStore } from '../store/themeStore';
import { Layers, Monitor, Sparkles, Leaf } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function ThemeController() {
  const { activeDraft, setActiveDraft } = useThemeStore();
  
  // 드래그 앤 드롭 상태
  const [position, setPosition] = useState({ x: 24, y: 24 }); // 기본 위치 (bottom: 24px, right: 24px)
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      // 화면 밖으로 나가지 않도록 경계 설정
      const newX = window.innerWidth - e.clientX - dragOffset.x;
      const newY = window.innerHeight - e.clientY - dragOffset.y;
      
      const maxX = window.innerWidth - 300; // 패널 대략적인 너비
      const maxY = window.innerHeight - 200; // 패널 대략적인 높이
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: window.innerWidth - e.clientX - position.x,
      y: window.innerHeight - e.clientY - position.y
    });
  };

  return (
    <div 
      className="fixed z-50 flex flex-col items-end gap-2"
      style={{
        bottom: `${position.y}px`,
        right: `${position.x}px`,
        cursor: isDragging ? 'grabbing' : 'auto'
      }}
    >
      <div 
        className="bg-bg-sub/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/10 w-72 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10 pointer-events-none">
          <Layers className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-text-main">시안 리모컨</h3>
        </div>
        
        <div className="space-y-2">
          <button
            onClick={(e) => { e.stopPropagation(); setActiveDraft('draft1'); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
              activeDraft === 'draft1' 
                ? 'bg-accent text-white font-bold shadow-lg shadow-accent/20' 
                : 'text-text-sub hover:bg-white/5'
            }`}
          >
            <Monitor className="w-5 h-5" />
            <div>
              <div className="text-sm">시안 1 (Classic)</div>
              <div className={`text-xs ${activeDraft === 'draft1' ? 'text-white/80' : 'text-text-sub/60'}`}>화이트/블루, 사이드바</div>
            </div>
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); setActiveDraft('draft2'); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
              activeDraft === 'draft2' 
                ? 'bg-accent text-bg-main font-bold shadow-lg shadow-accent/20' 
                : 'text-text-sub hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            <div>
              <div className="text-sm">시안 2 (Neon)</div>
              <div className={`text-xs ${activeDraft === 'draft2' ? 'text-bg-main/80' : 'text-text-sub/60'}`}>다크 네온, 플로팅 헤더</div>
            </div>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setActiveDraft('draft3'); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
              activeDraft === 'draft3' 
                ? 'bg-accent text-white font-bold shadow-lg shadow-accent/20' 
                : 'text-text-sub hover:bg-white/5'
            }`}
          >
            <Leaf className="w-5 h-5" />
            <div>
              <div className="text-sm">시안 3 (Warm)</div>
              <div className={`text-xs ${activeDraft === 'draft3' ? 'text-white/80' : 'text-text-sub/60'}`}>웜톤, Vercel 클론</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
