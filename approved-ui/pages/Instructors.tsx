import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Instructors() {
  const [activeTab, setActiveTab] = useState<'진로 멘토링' | '강사 섭외'>('진로 멘토링');

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24 pt-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-full shadow-sm border border-slate-200">
            <button
              onClick={() => setActiveTab('진로 멘토링')}
              className={`px-8 py-3 rounded-full text-base font-bold transition-all ${
                activeTab === '진로 멘토링'
                  ? 'bg-[#1e3a8a] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              진로 멘토링
            </button>
            <button
              onClick={() => setActiveTab('강사 섭외')}
              className={`px-8 py-3 rounded-full text-base font-bold transition-all ${
                activeTab === '강사 섭외'
                  ? 'bg-[#1e3a8a] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              강사 섭외
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-slate-200 min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {activeTab} 서비스는 현재 준비 중입니다
              </h2>
              <p className="text-slate-500 text-lg break-keep">
                더 나은 서비스를 제공하기 위해 열심히 준비하고 있습니다. <br className="hidden md:block"/>
                조금만 기다려 주시면 최고의 강사진과 멘토링 프로그램으로 찾아뵙겠습니다.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
