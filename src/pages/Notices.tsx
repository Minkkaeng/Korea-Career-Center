import { useState } from 'react';
import { Calendar, Bell, ChevronRight, Pin, Search, Mic } from 'lucide-react';

export default function Notices() {
  const [activeTab, setActiveTab] = useState<'notice' | 'interview'>('notice');

  const notices = [
    {
      id: 1,
      isNotice: true,
      title: '한국진로커리어센터 신규 홈페이지 오픈 안내',
      date: '2026.08.15',
      category: '공지사항',
      content: '안녕하세요. 한국진로커리어센터입니다. 4차 산업혁명 시대에 맞춰 데이터 기반의 진로 취업 서비스를 더욱 편리하게 제공해드리기 위해 공식 홈페이지를 새롭게 단장하였습니다.'
    },
    {
      id: 2,
      isNotice: true,
      title: '2026년 하반기 청년 취업역량강화 프로그램 수강생 모집',
      date: '2026.08.10',
      category: '행사안내',
      content: '직무 역량 중심의 밀착 멘토링과 실전 모의면접을 제공하는 하반기 취업 프로그램 모집을 시작합니다. 많은 참여 바랍니다.'
    },
    {
      id: 3,
      isNotice: false,
      title: '9월 기업 채용 트렌드 및 AI 자소서 작성법 특강 사전 안내',
      date: '2026.08.05',
      category: '행사안내',
      content: '달라지는 하반기 대기업 공채 트렌드와 챗GPT를 활용한 자기소개서 초안 작성법 원데이 특강을 진행합니다.'
    },
    {
      id: 4,
      isNotice: false,
      title: '서버 정기 점검에 따른 서비스 일시 중지 안내 (8/20 새벽 2시)',
      date: '2026.08.01',
      category: '안내',
      content: '안정적인 서비스 제공을 위한 서버 정기 점검이 진행됩니다. 해당 시간 동안 상담 신청 게시판 이용이 제한되오니 양해 부탁드립니다.'
    }
  ];

  const interviews = [
    {
      id: 1,
      name: '이수진 멘토',
      company: 'Naver AI Lab',
      job: 'AI Research Scientist',
      title: '"비전공자도 AI 엔지니어가 될 수 있나요?"',
      desc: '문과 출신에서 네이버 AI 연구원이 되기까지의 생생한 스토리와 팁을 들어보았습니다.',
      date: '2026.08.12'
    },
    {
      id: 2,
      name: '김태호 실장',
      company: '카카오모빌리티',
      job: '데이터 엔지니어',
      title: '모빌리티 서비스 뒤에 숨겨진 거대한 데이터 파이프라인',
      desc: '현직 데이터 엔지니어가 말하는 실무에서 가장 중요한 역량 3가지.',
      date: '2026.07.28'
    },
    {
      id: 3,
      name: '박민지 매니저',
      company: '현대자동차',
      job: 'UX/UI 디자이너',
      title: '미래 모빌리티 UX 기획, 어떻게 준비해야 할까?',
      desc: '자동차를 넘어 움직이는 생활 공간으로. 현대자동차 UX 디자이너의 포트폴리오 준비 전략.',
      date: '2026.07.15'
    }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-32">
      {/* Hero */}
      <div className="hidden">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <span className="text-[#1e3a8a] font-bold tracking-widest text-sm mb-4 block uppercase">News & Interviews</span>
          <h1 className="text-4xl md:text-[42px] font-black text-slate-900 mb-6 tracking-tight">공지·소식</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            센터의 최신 소식과 현직자들의 생생한 직무 인터뷰를 확인하세요.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 mt-12 relative z-20">
        <div className="bg-white rounded-lg border border-slate-200 p-6 md:p-10 shadow-sm min-h-[600px]">
          
          {/* Tabs & Search */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10 pb-6 border-b border-slate-100">
            <div className="flex bg-slate-100 p-1 rounded w-full lg:w-auto">
              <button 
                onClick={() => setActiveTab('notice')}
                className={`flex-1 lg:flex-none px-8 py-3 rounded font-bold text-[15px] transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'notice' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Bell className="w-4 h-4" /> 공지 및 행사
              </button>
              <button 
                onClick={() => setActiveTab('interview')}
                className={`flex-1 lg:flex-none px-8 py-3 rounded font-bold text-[15px] transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'interview' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Mic className="w-4 h-4" /> 직무·전문가 인터뷰
              </button>
            </div>
            
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="검색어를 입력하세요" 
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-all"
              />
            </div>
          </div>
          
          {/* Notice Tab Content */}
          {activeTab === 'notice' && (
            <div className="animate-in fade-in duration-500">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notices.map((notice, idx) => (
                  <div 
                    key={notice.id} 
                    className={`group bg-white p-6 rounded-xl border transition-all cursor-pointer flex flex-col h-full hover:-translate-y-1 hover:shadow-md ${notice.isNotice ? 'border-[#1e3a8a]/30 bg-blue-50/30' : 'border-slate-200 hover:border-[#1e3a8a]'}`}
                  >
                    <div className="flex justify-between items-center mb-4">
                      {notice.isNotice ? (
                        <span className="px-3 py-1 bg-[#1e3a8a] text-white text-[11px] font-bold rounded-sm flex items-center gap-1 shadow-sm">
                          <Pin className="w-3 h-3" /> 필독 공지
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-sm border border-slate-200 flex items-center gap-1">
                          {notice.category}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex-1 mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#1e3a8a] transition-colors line-clamp-2 leading-snug">
                        {notice.title}
                      </h3>
                      <p className="text-slate-500 text-[14px] line-clamp-3 leading-relaxed break-keep">
                        {notice.content}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-slate-400 text-sm border-t border-slate-100/80 pt-4 mt-auto">
                      <div className="font-mono font-medium">{notice.date}</div>
                      <div className="flex items-center gap-1 font-bold group-hover:text-[#1e3a8a] transition-colors">
                        자세히 <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interview Tab Content */}
          {activeTab === 'interview' && (
            <div className="animate-in fade-in duration-500">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {interviews.map((item) => (
                  <div key={item.id} className="group bg-white border border-slate-200 rounded overflow-hidden hover:border-[#1e3a8a] hover:shadow-md transition-all cursor-pointer">
                    <div className="h-40 bg-slate-100 border-b border-slate-200 p-6 flex flex-col justify-between relative overflow-hidden">
                      <span className="inline-block px-3 py-1 bg-white text-slate-600 border border-slate-200 text-[11px] font-bold rounded uppercase self-start">
                        {item.company}
                      </span>
                      <div>
                        <h4 className="text-slate-900 font-bold text-xl">{item.name}</h4>
                        <p className="text-slate-500 text-sm font-medium">{item.job}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-slate-900 text-[17px] mb-3 line-clamp-2 leading-snug group-hover:text-[#1e3a8a] transition-colors">{item.title}</h3>
                      <p className="text-slate-500 text-[14px] leading-relaxed line-clamp-2 mb-4">{item.desc}</p>
                      <div className="flex items-center justify-between text-slate-400 text-sm border-t border-slate-100 pt-4">
                        <span>{item.date}</span>
                        <div className="flex items-center gap-1 font-bold group-hover:text-[#1e3a8a] transition-colors">
                          본문 읽기 <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Pagination */}
          <div className="flex justify-center mt-12 gap-2">
            <button className="w-10 h-10 rounded border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center font-bold">1</button>
            <button className="w-10 h-10 rounded bg-[#1e3a8a] border border-[#1e3a8a] text-white shadow-sm flex items-center justify-center font-bold">2</button>
            <button className="w-10 h-10 rounded border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center font-bold">3</button>
          </div>

        </div>
      </div>
    </div>
  );
}
