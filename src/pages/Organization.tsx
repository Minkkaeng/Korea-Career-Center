import { GraduationCap, Award, Briefcase, BookOpen } from 'lucide-react';

export default function Organization() {
  const advisors = [
    {
      name: '김정기 박사',
      role: '고문 (박사)',
      image: `${import.meta.env.BASE_URL}images/org_kim_jung.jpg`,
      details: [
        '학력: 한성대학교 컨설팅학 박사',
        '현) 인빌드컨설팅 대표',
        '현) 한국경영인증원 전문위원(인사 분야 32년)',
        '전) 오리온 인사부장 (1991~2014, 23년 근무)',
        '전) 제이엠커리어 전략본부장',
        '전) 한성대학교 겸임교수',
        '전) 한국커리어코치협회 부회장',
        '전문 분야: 전직지원 및 생애설계 · 블라인드채용 · 면접관교육 · 취업역량강화 · 경력목표 설정 · 구직서류 작성 · 정부지원 제도 등'
      ]
    },
    {
      name: '정옥경 교수',
      role: '고문',
      image: `${import.meta.env.BASE_URL}images/org_jung_ok.jpg`,
      details: ['현) 한국진로커리어센터 고문']
    }
  ];

  const directors = [
    {
      name: '권태호 대표',
      role: '홍보이사',
      image: `${import.meta.env.BASE_URL}images/org_kwon_tae.jpg`,
      details: [
        '현) 성남인사이트 대표',
        '현) 성남시체육회 이사 (제3대)',
        '현) 성남시장애인체육회 전문위원',
        '현) 에스엔그린 드론방역 이사',
        '현) (사) 한국체육시설안전관리사 교수',
        '현) 성남사랑협동조합 이사',
        '현) (사) 환경과 사람들 자문위원'
      ]
    }
  ];

  const instructors = [
    {
      name: '권재규 교수',
      role: '대표강사',
      image: `${import.meta.env.BASE_URL}images/org_kwon_jae.png`,
      details: [
        '학력: 한국항공대학교 항공기계공학과 졸업',
        '현) 동원대학교 겸임교수 (소프트웨어 학과)',
        '현) 에이아이앤 (AI&) 대표',
        '현) 해커스교육 AI 전문강사',
        '현) 데이터트렌드 AI 융합 부문 이사',
        '현) 대통령 직속 지방시대위원회 평가위원 (데이터 검증 및 AI/DX 전략 자문)',
        '운영: 유튜브 채널 "꿘샘"',
        '경력: 15년 이상 글로벌 기업 근무 (미국 / 영국 / 일본)',
        '특이사항: IT 창업 3회 · 구글 프로젝트 매니저 자격 보유',
        '강의 분야: 생성형 AI 활용 교육 · AI 기반 진로특강 · AI 자소서/면접 특강'
      ]
    },
    {
      name: '명태현 이사',
      role: '대표강사',
      image: `${import.meta.env.BASE_URL}images/org_myung_tae.jpg`,
      details: [
        '학력: KAIST 대학원 인공지능학과 졸업 (가천대 의공학 석사 재학)',
        '현) ㈜넥스엠 대표 (AI 소프트웨어 개발)',
        '현) 한국 EBD 연구회 이사·사무총장',
        '현) 성남시·수원시 청소년재단 진로 멘토',
        '현) 국립중앙청소년디딤센터 전문위원',
        '현) 성남사랑협동조합 등기이사',
        '전) 대한의료데이터협회 상임이사 (의료 AI 개발 PM)',
        '전) 성균관대학교 AI융합원 전문위원',
        '전) ㈜제이비티, 네이버시스템㈜ 소프트웨어 개발 PM',
        '실적: 중·고교 약 200개교 진로 멘토링 및 삼성 드론 SW 교육 강의'
      ]
    }
  ];

  const renderDetail = (detail: string, idx: number) => {
    const isCurrent = detail.startsWith('현)');
    const isFormer = detail.startsWith('전)');
    
    let badge = null;
    let content = detail;
    let textClass = 'text-slate-600';

    if (isCurrent) {
      badge = <span className="inline-block px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-black rounded mr-2 shrink-0 border border-blue-100">현</span>;
      content = detail.replace('현) ', '').replace('현)', '');
      textClass = 'text-slate-700 font-medium';
    } else if (isFormer) {
      badge = <span className="inline-block px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[11px] font-black rounded mr-2 shrink-0 border border-slate-200">전</span>;
      content = detail.replace('전) ', '').replace('전)', '');
      textClass = 'text-slate-500';
    } else {
      badge = <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0 mr-2.5"></span>;
    }

    return (
      <li key={idx} className={`text-sm break-keep flex items-start ${textClass}`}>
        {badge}
        <span className="mt-0.5 leading-snug">{content.trim()}</span>
      </li>
    );
  };

  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-32">
      <div className="hidden">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <span className="text-[#1e3a8a] font-bold tracking-widest text-sm mb-4 block uppercase">Organization</span>
          <h1 className="text-4xl md:text-[42px] font-black text-slate-900 mb-6 tracking-tight">조직도</h1>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 mt-16 relative">
        
        {/* 1. CEO Level */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-black text-slate-400 mb-6 text-center tracking-widest uppercase">Chief Executive Officer</h3>
            <div className="bg-white border-t-4 border-[#1e3a8a] rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-10 items-center md:items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="shrink-0 relative z-10 text-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto mb-5 bg-slate-100">
                  <img src={`${import.meta.env.BASE_URL}images/org_ahn_mi.jpg`} alt="안미영 대표" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">안미영 대표</h2>
                <p className="text-sm font-bold text-[#1e3a8a] bg-blue-50 py-1.5 rounded-full inline-block px-5">대표이사 겸 센터장</p>
              </div>

              <div className="flex-1 relative z-10 w-full pt-4 md:pt-6 border-t md:border-t-0 md:border-l border-slate-100 md:pl-10">
                <ul className="text-left space-y-4 text-[15px] text-slate-600 break-keep">
                  <li className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-700">경기대학교 행정복지상담대학원 직업학과(석사)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="inline-block px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-black rounded mr-2 border border-blue-100">현</span>
                      <span className="font-medium text-slate-700">중랑여성인력개발센터 AI·디지털 위원</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="inline-block px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[11px] font-black rounded mr-2 border border-slate-200">전</span>
                      <span className="text-slate-500">성남산업진흥원 IT기업매칭 인재매칭 자문위원</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="inline-block px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[11px] font-black rounded mr-2 border border-slate-200">전</span>
                      <span className="text-slate-500">이젠 IT아카데미 취업총괄팀장</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-700">한국폴리텍대학 등 다수 대학 취업특강 출강</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Advisors Level */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">고문단</h3>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {advisors.map((person, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm shrink-0 mx-auto sm:mx-0">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 w-full">
                  <div className="text-center sm:text-left mb-4">
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{person.name}</h4>
                    <p className="text-sm font-bold text-blue-600">{person.role}</p>
                  </div>
                  <ul className="space-y-2.5">
                    {person.details.map((detail, dIdx) => renderDetail(detail, dIdx))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Instructors Level */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">임원 및 대표강사진</h3>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {[...directors, ...instructors].map((person, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col gap-6 items-center hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm shrink-0">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 w-full">
                  <div className="text-center mb-5 pb-5 border-b border-slate-100">
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{person.name}</h4>
                    <p className="text-sm font-bold text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full">{person.role}</p>
                  </div>
                  <ul className="space-y-2.5">
                    {person.details.map((detail, dIdx) => renderDetail(detail, dIdx))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
