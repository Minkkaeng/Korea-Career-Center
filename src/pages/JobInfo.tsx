import { Search, Briefcase, ChevronRight, BookOpen, Target, Network } from 'lucide-react';

export default function JobInfo() {
  const jobCategories = [
    { id: 1, name: '경영·사무', count: 152, icon: <Briefcase className="w-5 h-5" /> },
    { id: 2, name: 'IT·정보통신', count: 324, icon: <Network className="w-5 h-5" /> },
    { id: 3, name: '영업·고객상담', count: 89, icon: <Target className="w-5 h-5" /> },
    { id: 4, name: '연구개발·설계', count: 112, icon: <BookOpen className="w-5 h-5" /> },
  ];

  const recentJobs = [
    {
      id: 1,
      code: '20.01.02.01',
      title: '응용소프트웨어 엔지니어',
      category: 'IT·정보통신',
      desc: '컴퓨터 프로그래밍 언어를 사용하여 다양한 응용소프트웨어를 설계, 개발 및 유지보수하는 직무입니다.',
      skills: ['Java', 'Python', '시스템 분석', '데이터베이스 설계']
    },
    {
      id: 2,
      code: '02.01.01.01',
      title: '경영기획 관리자',
      category: '경영·사무',
      desc: '기업의 비전과 목표를 달성하기 위해 중장기 경영전략을 수립하고 사업계획을 기획 및 조정하는 직무입니다.',
      skills: ['전략수립', '시장분석', '재무이해', '리더십']
    },
    {
      id: 3,
      code: '20.02.02.02',
      title: '인공지능(AI) 전문가',
      category: 'IT·정보통신',
      desc: '머신러닝, 딥러닝 등의 AI 기술을 연구하고, 알고리즘을 개발하여 실제 서비스에 적용하는 직무입니다.',
      skills: ['Deep Learning', 'PyTorch', '통계학', '데이터 모델링']
    },
    {
      id: 4,
      code: '02.02.02.01',
      title: '인사/채용 담당자',
      category: '경영·사무',
      desc: '조직의 인적 자원을 효율적으로 관리하기 위해 채용, 평가, 보상, 교육 등의 제도를 기획하고 운영합니다.',
      skills: ['조직심리', '노동법', '면접기법', '커뮤니케이션']
    }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-32">
      {/* Hero */}
      <div className="bg-white pt-24 pb-16 border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <span className="text-[#1e3a8a] font-bold tracking-widest text-sm mb-4 block uppercase">NCS Job Information</span>
          <h1 className="text-4xl md:text-[42px] font-black text-slate-900 mb-6 tracking-tight">직무·직업 정보</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            국가직무능력표준(NCS) 기반의 체계적인 직무 분석과 <br className="hidden md:block"/>
            최신 채용 시장 트렌드가 반영된 직업 정보를 탐색해보세요.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 mt-12 relative z-20">
        
        {/* Search Bar */}
        <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-slate-200 mb-10 flex items-center">
          <div className="flex-1 flex items-center gap-3 px-4">
            <Search className="w-6 h-6 text-[#1e3a8a]" />
            <input 
              type="text" 
              placeholder="관심 있는 직무명이나 키워드를 검색해보세요. (예: AI, 마케팅, 인사)"
              className="w-full bg-transparent border-none text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
            />
          </div>
          <button className="hidden md:block shrink-0 px-8 py-3 bg-[#1e3a8a] text-white font-bold rounded hover:bg-[#1e40af] transition-colors">
            직무 검색
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded border border-slate-200 p-6 sticky top-28 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-6 border-b border-slate-100 pb-3">직무 카테고리</h3>
              <ul className="space-y-2">
                {jobCategories.map((cat, idx) => (
                  <li key={cat.id}>
                    <button className={`w-full flex items-center justify-between p-3 rounded transition-all ${
                      idx === 1 
                        ? 'bg-slate-50 text-[#1e3a8a] font-bold border border-slate-200' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium border border-transparent'
                    }`}>
                      <div className="flex items-center gap-3">
                        {cat.icon}
                        {cat.name}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${idx === 1 ? 'bg-[#1e3a8a] text-white' : 'bg-slate-100 text-slate-500'}`}>
                        {cat.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Job List */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-slate-900">IT·정보통신 분야 추천 직무</h2>
              <span className="text-sm text-slate-500 font-medium">총 324건</span>
            </div>

            {recentJobs.map((job) => (
              <div key={job.id} className="group bg-white rounded border border-slate-200 p-8 hover:border-[#1e3a8a] hover:shadow-sm transition-all cursor-pointer relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-[#1e3a8a] bg-blue-50 px-3 py-1 rounded border border-blue-100">
                        NCS {job.code}
                      </span>
                      <span className="text-sm font-medium text-slate-500">{job.category}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#1e3a8a] transition-colors flex items-center gap-2">
                      {job.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {job.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded">
                          #{skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="hidden md:flex shrink-0 w-10 h-10 rounded border border-slate-200 items-center justify-center group-hover:bg-[#1e3a8a] group-hover:border-[#1e3a8a] group-hover:text-white transition-all text-slate-400 mt-2">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center mt-12 gap-2">
              <button className="w-10 h-10 rounded bg-[#1e3a8a] border border-[#1e3a8a] text-white shadow-sm flex items-center justify-center font-bold">1</button>
              <button className="w-10 h-10 rounded bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center font-bold">2</button>
              <button className="w-10 h-10 rounded bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center font-bold">3</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
