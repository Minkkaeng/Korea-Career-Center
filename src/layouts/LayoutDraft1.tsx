import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ConsultationButton from '../components/ConsultationButton';

export default function LayoutDraft1() {
  return (
    <div className="flex min-h-screen bg-bg-main text-text-main font-sans">
      <Sidebar />
      <main className="flex-1 lg:ml-64 relative overflow-y-auto w-full transition-all duration-300 ease-in-out">
        <Outlet />
      </main>
      <ConsultationButton />
    </div>
  );
}
