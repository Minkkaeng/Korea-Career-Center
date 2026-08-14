import { useEffect } from 'react';
import { useThemeStore } from '../store/themeStore';
import LayoutDraft1 from './LayoutDraft1';
import LayoutDraft2 from './LayoutDraft2';
import LayoutDraft3 from './LayoutDraft3';

export default function MainLayout() {
  const { activeDraft } = useThemeStore();

  useEffect(() => {
    document.body.className = `theme-${activeDraft}`;
  }, [activeDraft]);

  if (activeDraft === 'draft1') {
    return <LayoutDraft1 />;
  }

  if (activeDraft === 'draft3') {
    return <LayoutDraft3 />;
  }

  return <LayoutDraft2 />;
}
