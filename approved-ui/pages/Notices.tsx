import { Calendar, Pin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Notices() {
  const notices = [
    {
      id: 3,
      isPinned: true,
      category: '언론보도',
      title: "한국진로커리어센터, 중랑여성인력개발센터와 MOU…'AI·디지털 일자리위' 참여",
      date: '2026.06',
      content: '한국진로커리어센터가 중랑여성인력개발센터와 업무협약을 체결하고, AI·디지털 일자리위원회에 공식 참여합니다.',
      url: 'http://snsite.kr/bbs/board.php?bo_table=news02&wr_id=13231',
      images: [`/images/news1.jpg`, `/images/news2.jpg`, `/images/news3.jpg`]
    },
    {
      id: 2,
      isPinned: false,
      category: '언론보도',
      title: '한국진로커리어센터, 성남시일자리센터와 맞손',
      date: '2026.06',
      content: '성남시일자리센터와의 협력을 통해 구직자들에게 보다 전문적이고 맞춤화된 취업 지원 서비스를 제공할 예정입니다.',
      url: 'http://snsite.kr/bbs/board.php?bo_table=news02&wr_id=13077'
    },
    {
      id: 1,
      isPinned: false,
      category: '언론보도',
      title: '한국폴리텍대학 로봇캠퍼스-한국진로커리어센터, 산학협력 MOU 체결',
      date: '2026.05',
      content: '한국폴리텍대학 로봇캠퍼스와의 산학협력 MOU 체결을 통해 로봇 및 미래 산업 분야의 인재 양성에 앞장섭니다.',
      url: 'https://www.newsnjob.com/news/articleView.html?idxno=33544'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full bg-slate-50/50 font-sans min-h-screen pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-4">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {notices.map((notice) => (
            <motion.div 
              key={notice.id} 
              variants={item}
              className={`group bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full border ${notice.isPinned ? 'border-[#1e3a8a] shadow-lg ring-1 ring-[#1e3a8a]/10' : 'border-slate-200'}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  {notice.isPinned && (
                    <span className="flex items-center gap-1.5 bg-[#1e3a8a] text-white text-xs font-bold px-2.5 py-1 rounded-md">
                      <Pin className="w-3 h-3" />
                      주요소식
                    </span>
                  )}
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${notice.isPinned ? 'bg-blue-50 text-[#1e3a8a]' : 'bg-slate-100 text-slate-600'}`}>
                    {notice.category}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#1e3a8a] transition-colors leading-snug break-keep">
                  {notice.title}
                </h3>
                
                {notice.images && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {notice.images.map((img, idx) => (
                      <div key={idx} className="aspect-square rounded-lg overflow-hidden border border-slate-100">
                        <img src={img} alt="뉴스 이미지" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-slate-600 leading-relaxed text-[15px] break-keep line-clamp-3">
                  {notice.content}
                </p>
              </div>

              <div className="flex items-center justify-between text-slate-400 text-sm border-t border-slate-100/80 pt-4 mt-6">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{notice.date}</span>
                </div>
                <a href={notice.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#1e3a8a] font-bold group-hover:gap-2 transition-all">
                  기사 원문보기
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}


