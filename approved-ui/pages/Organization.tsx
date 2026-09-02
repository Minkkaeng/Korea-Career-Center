import { GraduationCap, Award, Briefcase, BookOpen } from 'lucide-react';

export default function Organization() {
  const advisors = [
    {
      name: '김정기 박사',
      role: '한국진로커리어센터 고문',
      degree: '컨설팅학 박사',
      image: `/images/org_kim_jung.jpg`,
      details: [
        '학력: 한성대학교 컨설팅학 박사',
        '현) 인빌드컨설팅 대표',
        '현) 한국경영인증원 전문위원(인사 분야 32년)',
        '전) 오리온 인사과장 (23년 근무)',
        '전) 제이엠커리어 전략본부장',
        '전) 한성대학교 겸임교수',
        '전) 한국커리어코치협회 부회장',
        '전문 분야:\n전직지원/생애설계 · 블라인드채용 · 면접관교육 · 취업역량강화 · 경력목표 설정 · 구직서류 작성 · 정부지원제도 등'
      ]
    },
    {
      name: '정옥경 교수',
      role: '한국진로커리어센터 고문',
      degree: '교육학 박사',
      image: `/images/org_jung_ok.png`,
      details: [
        '학력: 교육학 석사(상담심리 전공) · 교육학 박사(교육사회학 전공)',
        '현) 파워인상담센터 대표',
        '현) 여기스터디평생교육원 개발교수',
        '현) 청춘시니어스쿨협회 대표',
        '전) 경기도 경찰청 객원교수',
        '전) 한국방송통신대학교 외래교수',
        '전) 경기도교육청 꿈의대학 교수',
        '전) 성남폴리텍대학교 NCS강사',
        '전) 고려사이버대학교 직·업평생교육과 외래교수',
        '전) 서울시교육청 학부모책 강사',
        '전) 에듀윌 직업상담사 전담 교수',
        '전) (주) 파워인진로상담센터 대표',
        '전) (주) 한국HR 경영연구원 부원장',
        '전) 연우심리연구소 전임연구원',
        '전) 인하공업대학 겸임교수 외 다수대학외래교수',
        '전) 인천시교육청 직무연수위원',
        '강의 분야: 행복 & 스트레스관리 · 진로 & 법정의무교육 · 인간관계 & 소통 · 대학강의',
        '주요 출강: 삼성전자 · 서울대 · EBS · 국토교통개발부 · 장애인고용공단 · 인하대 · 고려사이버대 등 다수'
      ]
    },
    {
      name: '윤지영 교수',
      role: '한국진로커리어센터 고문',
      degree: '공학박사 (컴퓨터공학)',
      image: `/images/org_yoon_ji.png`,
      details: [
        '학력: 경북대학교 일반대학원 컴퓨터공학과 공학박사 (2016년 8월)',
        '현) 한국폴리텍대학 로봇캠퍼스 로봇IT학과 교수',
        '현) ISO/IEC JTC 1 WG12 표준위원 (3D프린팅/스캐닝)',
        '현) 중소기업기술개발사업 등 평가위원',
        '주요 실적: [논문] "ARINC661 Graphics Rendering Based on OpenVG..." 등 SCIE 등재 해외논문 및 국내논문 다수 / [특허] 안티 알리아싱 관련 특허 보유',
        '연구 분야: 인공지능, 빅데이터, GPGPU, 컴퓨터비전, Khronos 컴퓨터 그래픽스 엔진 개발 프로젝트'
      ]
    }
  ];

  const directors = [
    {
      name: '권태호 대표',
      role: '한국진로커리어센터 홍보이사',
      degree: '성남인사이트 / 현대공인중개사 대표',
      image: `/images/org_kwon_tae.jpg`,
      details: [
        '현) 성남인사이트 대표',
        '현) 에스엔그린 드론방역 이사',
        '현) 성남사랑협동조합 이사',
        '현) 현대공인중개사 대표',
        '전) 풍생고총동문회 회장',
        '전) 성남시체육회 이사',
        '전) 성남시장애인체육회 전문위원',
        '전) (사) 한국체육시설안전관리사 교수',
        '전) (사) 환경과 사람들 자문위원'
      ]
    }
  ];

  const instructors = [
    {
      name: '권재규 교수',
      role: '한국진로커리어센터 대표강사',
      degree: '항공기계공학과 졸업',
      image: `/images/org_kwon_jae.png`,
      details: [
        '학력: 한국항공대학교 항공기계공학과 졸업',
        '현) 동원대학교 겸임교수 (소프트웨어 학과)',
        '현) 에이아이앤 (AI&) 대표',
        '현) 대통령 직속 지방시대위원회 평가위원\n(데이터 검증 및 AI/DX 전략 자문)',
        '현) 해커스교육 AI 전문강사',
        '현) 데이터트렌드 AI 융합 부문 이사',
        '운영: 유튜브 채널 "꿘샘"',
        '경력: 15년 이상 글로벌 기업 근무 (미국 / 영국 / 일본)',
        '특이사항: IT 창업 3회 · 구글 프로젝트 매니저 자격 보유',
        '강의 분야: 생성형 AI 활용 교육 · AI 기반 진로특강 · AI 자소서/면접 특강'
      ]
    },
    {
      name: '명태현 이사',
      role: '한국진로커리어센터 대표강사',
      degree: 'KAIST 인공지능학과 졸업',
      image: `/images/org_myung_tae.jpg`,
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
        '주요 실적: 중·고교 200여 개교 진로 멘토링 및 삼성 드론 SW 교육'
      ]
    }
  ];

  type Person = {
    name: string;
    role: string;
    degree: string;
    image: string;
    details: string[];
  };

  const renderPersonCard = (person: Person, idx: number) => {
    const eduItems: string[] = [];
    const mainItems: string[] = [];
    const bottomItems: string[] = [];

    person.details.forEach((detail: string) => {
      if (detail.startsWith('학력:')) {
        eduItems.push(detail);
      } else if (detail.startsWith('현)') || detail.startsWith('전)')) {
        mainItems.push(detail);
      } else {
        bottomItems.push(detail);
      }
    });

    return (
      <div key={idx} className="bg-white border border-slate-200 rounded-2xl md:rounded-3xl p-5 md:p-7 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start relative overflow-hidden">
        {/* Left Business Card Profile Badge */}
        <div className="w-full lg:w-56 shrink-0 flex flex-col items-center text-center lg:border-r border-slate-100 lg:pr-6 pt-1">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm mb-3 bg-slate-100 shrink-0">
            <img src={person.image} alt={person.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
          </div>
          <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-1 tracking-tight">{person.name}</h4>
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[11px] md:text-xs font-bold rounded-full border border-blue-100 mb-1.5 break-keep">
            {person.role}
          </span>
          {person.degree && (
            <span className="text-[11px] md:text-xs text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded break-keep">
              {person.degree}
            </span>
          )}
        </div>

        {/* Right Content Section */}
        <div className="flex-1 w-full flex flex-col gap-3">
          {/* Top: Education (Full width) */}
          {eduItems.length > 0 && (
            <div className="pb-2.5 border-b border-slate-100">
              {eduItems.map((item, i) => (
                <div key={i} className="text-[13px] md:text-sm font-bold text-slate-800 break-keep flex items-start leading-snug">
                  <span className="inline-block px-1.5 py-0.5 bg-blue-100 text-[#1e3a8a] text-[11px] font-black rounded mr-2 shrink-0 border border-blue-200">학력</span>
                  <span className="mt-0.5">{item.replace('학력: ', '').replace('학력:', '').trim()}</span>
                </div>
              ))}
            </div>
          )}

          {/* Middle: Current & Former Career History (2-Column Grid) */}
          {mainItems.length > 0 && (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
              {mainItems.map((detail, dIdx) => {
                const isCurrent = detail.startsWith('현)');
                const badge = isCurrent ? (
                  <span className="inline-block px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-black rounded mr-2 shrink-0 border border-blue-100">현</span>
                ) : (
                  <span className="inline-block px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[11px] font-black rounded mr-2 shrink-0 border border-slate-200">전</span>
                );
                const content = detail.replace('현) ', '').replace('현)', '').replace('전) ', '').replace('전)', '');
                const textClass = isCurrent ? 'text-slate-700 font-medium' : 'text-slate-500';
                const parts = content.split(/\n|<br\s*\/?>/i);

                return (
                  <li key={dIdx} className={`text-[13px] md:text-sm break-keep flex items-start leading-snug ${textClass}`}>
                    {badge}
                    <span className="mt-0.5 flex-1">
                      {parts.map((p, pIdx) => (
                        <span key={pIdx} className={pIdx > 0 ? "block text-slate-500 font-normal text-xs md:text-[13px] mt-0.5 leading-snug" : "inline"}>
                          {p.trim()}
                        </span>
                      ))}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}

          {/* Bottom: Additional Fields / Summary / Special / Career / Channel items (Full width at bottom) */}
          {bottomItems.length > 0 && (
            <div className="pt-2.5 border-t border-slate-100 space-y-2">
              {bottomItems.map((detail, bIdx) => {
                const parts = detail.split(/\n|<br\s*\/?>/i);
                return (
                  <div key={bIdx} className="text-[13px] md:text-sm text-slate-600 break-keep flex items-start leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0 mr-2.5"></span>
                    <span className="mt-0.5 flex-1">
                      {parts.map((p, pIdx) => (
                        <span key={pIdx} className={pIdx > 0 ? "block text-slate-600 font-normal mt-1 leading-relaxed" : "inline"}>
                          {p.trim()}
                        </span>
                      ))}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-slate-50/50 font-sans min-h-screen pb-24 md:pb-32">
      <div className="hidden">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <span className="text-[#1e3a8a] font-bold tracking-widest text-sm mb-4 block uppercase">Organization</span>
          <h1 className="text-4xl md:text-[42px] font-black text-slate-900 mb-6 tracking-tight">조직도</h1>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-4 md:pt-6 relative">
        
        {/* 1. CEO Level */}
        <section className="mb-14 md:mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl font-black text-slate-400 mb-5 text-center tracking-widest uppercase">Chief Executive Officer</h3>
            <div className="bg-white border-t-4 border-[#1e3a8a] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="shrink-0 relative z-10 text-center">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto mb-4 bg-slate-100">
                  <img src={`/images/org_ahn_mi.jpg`} alt="안미영 대표" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-1.5 tracking-tight">안미영 대표</h2>
                <p className="text-xs md:text-sm font-bold text-[#1e3a8a] bg-blue-50 py-1 rounded-full inline-block px-4 border border-blue-100">한국진로커리어센터 대표이사 겸 센터장</p>
              </div>

              <div className="flex-1 relative z-10 w-full pt-2 md:pt-4 border-t md:border-t-0 md:border-l border-slate-100 md:pl-8">
                <ul className="text-left space-y-3 text-sm md:text-[15px] text-slate-600 break-keep">
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
        <section className="mb-14 md:mb-16">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">고문단</h3>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>
          <div className="space-y-5 md:space-y-6 max-w-5xl mx-auto">
            {advisors.map((person, idx) => renderPersonCard(person, idx))}
          </div>
        </section>

        {/* 3. Instructors Level */}
        <section>
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">임원 및 대표강사진</h3>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>
          <div className="space-y-5 md:space-y-6 max-w-5xl mx-auto">
            {[...directors, ...instructors].map((person, idx) => renderPersonCard(person, idx))}
          </div>
        </section>

      </div>
    </div>
  );
}

