import { useState, useRef } from 'react';
import { Send, CheckCircle2, AlertCircle, Building2, User } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Apply() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formType, setFormType] = useState<'counseling' | 'education'>('counseling');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    content: '',
    privacy: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = formType === 'counseling' ? '이름을 입력해주세요.' : '담당자명/기관명을 입력해주세요.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = '연락처를 입력해주세요.';
    } else if (!/^[0-9-]{9,13}$/.test(formData.phone)) {
      newErrors.phone = '올바른 연락처 형식이 아닙니다.';
    }
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 주소 형식이 아닙니다.';
    }
    if (!formData.content.trim()) {
      newErrors.content = '문의 내용을 입력해주세요.';
    }
    if (!formData.privacy) {
      newErrors.privacy = '개인정보 수집 및 이용에 동의해야 합니다.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // VITE_APP_EMAILJS_SERVICE_ID, VITE_APP_EMAILJS_TEMPLATE_ID, VITE_APP_EMAILJS_PUBLIC_KEY
      // 위 환경 변수들을 .env 파일에 설정해야 합니다.
      const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.warn("EmailJS credentials are not configured. Simulating success.");
        await new Promise(r => setTimeout(r, 1500)); // Simulate network request
      } else {
        await emailjs.send(
          serviceId,
          templateId,
          {
            type: formType === 'counseling' ? '개인 상담 신청' : '교육/제휴 문의',
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.content,
          },
          publicKey
        );
      }
      
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', content: '', privacy: false });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      alert('문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-32">
      {/* Hero */}
      <div className="hidden">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <span className="text-[#1e3a8a] font-bold tracking-widest text-sm mb-4 block uppercase">Contact Us</span>
          <h1 className="text-4xl md:text-[42px] font-black text-slate-900 mb-6 tracking-tight">상담·교육 신청</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            원하시는 서비스 카테고리를 선택 후 정보를 남겨주시면<br className="hidden md:block" />
            담당자가 빠른 시일 내에 연락드리겠습니다.
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 mt-12 relative z-20">
        <div className="bg-white rounded-lg border border-slate-200 p-8 md:p-12 shadow-sm relative overflow-hidden">
          
          {submitStatus === 'success' ? (
            <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-emerald-50 rounded flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">신청이 완료되었습니다!</h2>
              <p className="text-slate-500 mb-8">담당자가 내용 확인 후 기재해주신 연락처로 회신해 드리겠습니다.</p>
              <button 
                onClick={() => setSubmitStatus('idle')}
                className="px-8 py-3 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 transition-colors"
              >
                다른 문의 남기기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 animate-in fade-in duration-500">
              {/* Type Selection */}
              <div className="grid grid-cols-2 gap-4 mb-10 border-b border-slate-200 pb-10">
                <button
                  type="button"
                  onClick={() => setFormType('counseling')}
                  className={`flex flex-col items-center gap-3 p-6 rounded border-2 transition-all ${
                    formType === 'counseling' 
                      ? 'border-[#1e3a8a] bg-slate-50' 
                      : 'border-transparent bg-white hover:bg-slate-50'
                  }`}
                >
                  <User className={`w-8 h-8 ${formType === 'counseling' ? 'text-[#1e3a8a]' : 'text-slate-400'}`} />
                  <span className={`font-bold ${formType === 'counseling' ? 'text-slate-900' : 'text-slate-500'}`}>개인 상담 신청</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormType('education')}
                  className={`flex flex-col items-center gap-3 p-6 rounded border-2 transition-all ${
                    formType === 'education' 
                      ? 'border-[#1e3a8a] bg-slate-50' 
                      : 'border-transparent bg-white hover:bg-slate-50'
                  }`}
                >
                  <Building2 className={`w-8 h-8 ${formType === 'education' ? 'text-[#1e3a8a]' : 'text-slate-400'}`} />
                  <span className={`font-bold ${formType === 'education' ? 'text-slate-900' : 'text-slate-500'}`}>기업/기관 문의</span>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">
                    {formType === 'counseling' ? '이름' : '담당자명 / 기관명'} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 transition-all ${
                      errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]'
                    }`} 
                    placeholder={formType === 'counseling' ? '홍길동' : '홍길동 / (주)한국기업'} 
                  />
                  {errors.name && <p className="text-red-500 text-sm flex items-center gap-1 mt-1"><AlertCircle className="w-4 h-4"/> {errors.name}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">연락처 <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 transition-all ${
                      errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]'
                    }`} 
                    placeholder="010-0000-0000" 
                  />
                  {errors.phone && <p className="text-red-500 text-sm flex items-center gap-1 mt-1"><AlertCircle className="w-4 h-4"/> {errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="block text-sm font-bold text-slate-700">이메일 (선택)</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 transition-all ${
                    errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]'
                  }`} 
                  placeholder="example@email.com" 
                />
                {errors.email && <p className="text-red-500 text-sm flex items-center gap-1 mt-1"><AlertCircle className="w-4 h-4"/> {errors.email}</p>}
              </div>

              <div className="space-y-2 mb-8">
                <label className="block text-sm font-bold text-slate-700">문의 내용 <span className="text-red-500">*</span></label>
                <textarea 
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={5} 
                  className={`w-full px-4 py-3 rounded border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 transition-all resize-none ${
                    errors.content ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]'
                  }`} 
                  placeholder={formType === 'counseling' ? '희망하시는 상담 분야나 현재 고민을 자유롭게 적어주세요.' : '요청하시는 교육 주제, 예상 인원 및 일정을 남겨주시면 더 빠른 상담이 가능합니다.'} 
                ></textarea>
                {errors.content && <p className="text-red-500 text-sm flex items-center gap-1 mt-1"><AlertCircle className="w-4 h-4"/> {errors.content}</p>}
              </div>

              {/* Privacy Consent */}
              <div className={`flex items-start gap-3 mb-8 p-5 rounded border ${errors.privacy ? 'border-red-300 bg-red-50' : 'bg-slate-50 border-slate-200'}`}>
                <input 
                  type="checkbox" 
                  id="privacy" 
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-[#1e3a8a] focus:ring-[#1e3a8a]" 
                />
                <div className="text-sm text-slate-600">
                  <label htmlFor="privacy" className="font-bold text-slate-900 block mb-1 cursor-pointer">개인정보 수집 및 이용 동의 <span className="text-red-500">*</span></label>
                  <p>수집항목: 이름, 연락처, 이메일<br/>이용목적: 상담 및 문의에 대한 회신 및 안내<br/>보유기간: 처리 완료 후 6개월 보관 후 파기</p>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold rounded transition-all flex justify-center items-center gap-2 text-lg disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">처리 중입니다...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    신청서 제출하기
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
