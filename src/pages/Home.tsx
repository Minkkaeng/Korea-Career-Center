import { useThemeStore } from '../store/themeStore';
import HomeDraft1 from './HomeDraft1';
import HomeDraft2 from './HomeDraft2';
import HomeDraft3 from './HomeDraft3';
import OpeningPopup from '../components/OpeningPopup';

export default function Home() {
  const { activeDraft } = useThemeStore();

  const renderDraft = () => {
    if (activeDraft === 'draft1') return <HomeDraft1 />;
    if (activeDraft === 'draft3') return <HomeDraft3 />;
    return <HomeDraft2 />;
  };

  return (
    <>
      <OpeningPopup />
      {renderDraft()}
    </>
  );
}
