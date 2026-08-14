import { create } from 'zustand';

export type DraftType = 'draft1' | 'draft2' | 'draft3';

interface ThemeState {
  activeDraft: DraftType;
  setActiveDraft: (draft: DraftType) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  activeDraft: 'draft1',
  setActiveDraft: (draft) => set({ activeDraft: draft }),
}));
