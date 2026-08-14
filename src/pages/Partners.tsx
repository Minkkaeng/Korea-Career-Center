import { Building, MapPin, ArrowUpRight, CheckCircle, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Partners() {
  const partners = [
    {
      name: '중랑구여성인력개발센터',
      type: '공공기관',
      desc: '여성의 경력단절 예방 및 취업 지원, 직업능력개발 훈련을 전문으로 하는 특화 기관입니다.',
      colorStr: 'bg-blue-50 text-blue-700 border-blue-200',
      logoText: '중랑여성',
    },
    {
      name: '한국폴리텍대학 로봇캠퍼스',
      type: '교육기관',
      desc: '4차 산업혁명 핵심 기술인 로봇 분야의 실무형 특화 전문 인재를 양성하는 국책 특수대학입니다.',
      colorStr: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      logoText: 'KOPO',
    },
    {
      name: '성남시청 일자리센터',
      type: '지자체',
      desc: '지역 주민의 맞춤형 일자리 알선과 구인구직 서비스를 총괄 지원하는 공공 행정기관입니다.',
      colorStr: 'bg-amber-50 text-amber-700 border-amber-200',
      logoText: '성남시',
    },
    {
      name: '두드림IT교육원',
      type: '민간기관',
      desc: '첨단 IT 기술 교육 및 현장 실무 맞춤형 프로젝트 중심의 수준 높은 IT 개발 교육을 제공합니다.',
      colorStr: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      logoText: 'DoDream',
    },
  ];

  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-32">
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16 border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <div className="w-16 h-16 border-2 border-[#1e3a8a] text-[#1e3a8a] rounded flex items-center justify-center mx-auto mb-6">
            <Handshake className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-[42px] font-black text-slate-900 mb-4 tracking-tight">협력기관</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            한국진로커리어센터는 각 분야 최고의 전문가 그룹과 <br className="hidden md:block"/>
            굳건한 파트너십을 맺고 성공적인 취업 연계 네트워크를 구축합니다.
          </p>
        </div>
      </section>
      
      {/* Partners Grid */}
      <section className="max-w-[1240px] mx-auto px-6 mt-12 relative z-20">
        <div className="grid md:grid-cols-2 gap-6">
          {partners.map((partner, idx) => (
            <div key={idx} className="group bg-white rounded-lg p-8 lg:p-10 border border-slate-200 hover:border-[#1e3a8a] transition-all duration-300 relative overflow-hidden shadow-sm">
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`w-20 h-20 ${partner.colorStr} border rounded-lg flex items-center justify-center font-bold text-lg`}>
                  {partner.logoText}
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded border border-slate-200">
                  {partner.type}
                </span>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#1e3a8a] transition-colors flex items-center gap-2">
                  {partner.name}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-[#1e3a8a]" />
                </h2>
                <p className="text-slate-600 leading-relaxed text-[16px]">{partner.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Partnership Call to action */}
        <div className="mt-20 bg-slate-900 rounded-lg p-10 lg:p-16 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <h3 className="text-3xl font-black text-white mb-4">새로운 파트너를 기다립니다.</h3>
            <p className="text-slate-400 text-lg">우수 인재 양성과 성공적인 채용 연계에 뜻을 함께할 기업 및 기관의 제휴를 환영합니다.</p>
            
            <ul className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-bold text-slate-300">
              <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#60a5fa]" /> 교육 위탁</li>
              <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#60a5fa]" /> 채용 약정</li>
              <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#60a5fa]" /> 멘토링 지원</li>
            </ul>
          </div>
          
          <Link to="/contact" className="shrink-0 flex items-center gap-2 px-10 py-5 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold text-lg rounded transition-colors">
            제휴 문의하기 <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
