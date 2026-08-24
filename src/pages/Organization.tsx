import { UserCircle, GraduationCap, Award, Briefcase, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Organization() {
  const advisors = [
    {
      name: '정옥경 교수',
      role: '고문',
      image: `${import.meta.env.BASE_URL}images/org_jung_ok.jpg`,
      details: ['한국진로커리어센터 고문']
    },
    {
      name: '김정기 박사',
      role: '고문 (박사)',
      image: `${import.meta.env.BASE_URL}images/org_kim_jung.jpg`,
      details: [
        '최종학력: 한성대학교 컨설팅학 박사',
        '인빌드컨설팅 대표 · 한국경영인증원 전문위원',
        '전직지원 및 생애설계, 블라인드채용, 면접관교육',
        '경영지도사, KAC(커리어코치), 프레디저·버크만 강사'
      ]
    }
  ];

  const directors = [
    {
      name: '권태호 대표',
      role: '홍보이사',
      image: `${import.meta.env.BASE_URL}images/org_kwon_tae.jpg`,
      details: [
        '성남인사이트 대표',
        '성남시체육회 이사 (제3대)',
        '성남시장애인체육회 전문위원',
        '에스엔그린 드론방역 이사',
        '(사) 한국체육시설안전관리사 교수'
      ]
    }
  ];

  const instructors = [
    {
      name: '권재규 교수',
      role: '대표강사',
      image: `${import.meta.env.BASE_URL}images/org_kwon_jae.png`,
      details: [
        '동원대학교 겸임교수 (소프트웨어 학과)',
        '대통령 직속 지방시대위원회 평가위원 (데이터/AI)',
        '해커스교육 AI 전문강사',
        '15년 이상 글로벌 기업 근무 (미국/영국/일본)',
        '유튜브 채널 "꿘샘AI" 운영'
      ]
    },
    {
      name: '명태현 이사',
      role: '대표강사',
      image: `${import.meta.env.BASE_URL}images/org_myung_tae.jpg`,
      details: [
        '㈜넥스엠 대표이사, 한국EBD연구회 사무총장',
        '대한의료데이터협회 상임이사 (의료 인공지능 개발 PM)',
        '성균관대학교 인공지능융합원 전문위원',
        '국립중앙청소년디딤센터 전문위원 (청소년 AI 자문)',
        '중고등학교 약 200여 곳 진로멘토링'
      ]
    }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-32">
      <div className="hidden">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <span className="text-[#1e3a8a] font-bold tracking-widest text-sm mb-4 block uppercase">Organization</span>
          <h1 className="text-4xl md:text-[42px] font-black text-slate-900 mb-6 tracking-tight">조직도</h1>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 mt-16 relative">
        <div className="relative max-w-5xl mx-auto">
          {/* CEO Level */}
          <div className="flex justify-center mb-16 relative">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 w-[340px] text-center relative z-10 shadow-xl">
              <div className="w-24 h-24 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-[#1e3a8a] mb-5 overflow-hidden border-4 border-white shadow-sm">
                <img src={`${import.meta.env.BASE_URL}images/org_ahn_mi.jpg`} alt="안미영 대표" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">안미영 대표</h2>
              <p className="text-sm font-bold text-[#1e3a8a] bg-blue-50 py-1.5 rounded-full inline-block px-5 mb-5">대표이사 겸 센터장</p>
              
              <ul className="text-left space-y-2 text-sm text-slate-600 break-keep">
                <li className="flex items-start gap-2"><GraduationCap className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />경기대 행정복지상담대학원 직업학과(석사)</li>
                <li className="flex items-start gap-2"><Briefcase className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />성남산업진흥원 IT기업매칭 인재매칭 자문위원</li>
                <li className="flex items-start gap-2"><Award className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />중랑여성인력개발센터 AI·디지털 위원</li>
                <li className="flex items-start gap-2"><BookOpen className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />한국폴리텍대학 등 다수 대학 취업특강 출강</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* 고문단 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-900 border-b-2 border-slate-200 pb-3 flex items-center gap-3">
                <span className="w-2 h-6 bg-[#1e3a8a] rounded-full inline-block"></span>
                고문단 (Advisors)
              </h3>
              <div className="grid gap-6">
                {advisors.map((person, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start hover:shadow-lg transition-shadow">
                    <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover border-4 border-slate-50 shadow-sm shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{person.name}</h4>
                      <p className="text-sm font-bold text-[#1e3a8a] mb-3">{person.role}</p>
                      <ul className="space-y-1">
                        {person.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-sm text-slate-600 break-keep flex items-start gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 강사진 및 임원 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-900 border-b-2 border-slate-200 pb-3 flex items-center gap-3">
                <span className="w-2 h-6 bg-[#1e3a8a] rounded-full inline-block"></span>
                임원 및 대표강사진
              </h3>
              <div className="grid gap-6">
                {[...directors, ...instructors].map((person, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start hover:shadow-lg transition-shadow">
                    <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover border-4 border-slate-50 shadow-sm shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{person.name}</h4>
                      <p className="text-sm font-bold text-[#1e3a8a] mb-3">{person.role}</p>
                      <ul className="space-y-1">
                        {person.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-sm text-slate-600 break-keep flex items-start gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
