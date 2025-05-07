// services/notifications.ts

import { fetcher } from './fetcher';

const UPDATE_NOTIFICATIONS_URL =
  'http://localhost:5000/api/notification/update-notification/view-all';

export const updateAllNotificationsAsViewed = async (token: string) => {
  await fetcher(UPDATE_NOTIFICATIONS_URL, {
    method: 'PUT',
    token,
  });
};
