import { useEffect } from 'react';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface NotificationStore {
  notifications: INotification[];
  addNotification: (item: INotification) => void;
  viewedNotification: (notificationId: string) => void;
  removeNotification: (notificationId: string) => void;
  setNotifications: (notList: INotification[]) => void;
}

export const useNotificationStore = create<NotificationStore>()(
  persist(
    (set, get) => ({
      notifications: [],
      addNotification: (item) => {
        const exists = get().notifications.some((not) => not._id === item._id);
        if (!exists) {
          set({ notifications: [...get().notifications, item] });
        }
      },
      viewedNotification: (notificationId) => {
        const findIndex = get().notifications.findIndex(
          (find) => find._id === notificationId
        );

        if (findIndex >= 0) {
          const updated = get().notifications.map((item) =>
            item._id === notificationId ? { ...item, viewed: true } : item
          );
          set({
            notifications: updated,
          });
        }
      },

      removeNotification: (notificationId) => {
        const current = [...get().notifications]; // copie defensivă
        const index = current.findIndex(
          (notif) => notif._id === notificationId
        );
        if (index !== -1) {
          current.splice(index, 1);
          set({ notifications: current });
        }
      },
      setNotifications: (notList) => set({ notifications: notList }),
    }),
    {
      name: 'notification-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
