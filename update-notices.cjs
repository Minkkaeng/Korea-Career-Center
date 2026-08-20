const fs = require('fs');
let f = fs.readFileSync('src/pages/Notices.tsx', 'utf8');
const startIdx = f.indexOf('          {/* Notice Tab Content */}');
const endIdx = f.indexOf('          {/* Interview Tab Content */}');
if (startIdx !== -1 && endIdx !== -1) {
  const newContent = `          {/* Notice Tab Content */}
          {activeTab === 'notice' && (
            <div className="animate-in fade-in duration-500">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notices.map((notice, idx) => (
                  <div 
                    key={notice.id} 
                    className={\`group bg-white p-6 rounded-xl border transition-all cursor-pointer flex flex-col h-full hover:-translate-y-1 hover:shadow-md \${notice.isNotice ? 'border-[#1e3a8a]/30 bg-blue-50/30' : 'border-slate-200 hover:border-[#1e3a8a]'}\`}
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

`;
  f = f.substring(0, startIdx) + newContent + f.substring(endIdx);
  fs.writeFileSync('src/pages/Notices.tsx', f);
}
