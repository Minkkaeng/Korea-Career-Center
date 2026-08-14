import { Outlet } from 'react-router-dom';
import HeaderDraft2 from '../components/HeaderDraft2';
import ConsultationButton from '../components/ConsultationButton';

export default function LayoutDraft2() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-bg-main text-text-main">
      <HeaderDraft2 />
      <main className="flex-1 relative w-full pt-32 pb-24 transition-all duration-300">
        <Outlet />
      </main>
      <ConsultationButton />
    </div>
  );
}
