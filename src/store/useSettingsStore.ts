import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface SettingsStore {
  settings: [];
  addToSettings: (item: {}) => void;
  updateToSettings: (item: {}) => void;
  removeToSettings: (item: {}) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      settings: [],
      addToSettings(item) {},
      updateToSettings(item) {},
      removeToSettings(item) {},
    }),
    {
      name: 'settings-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
