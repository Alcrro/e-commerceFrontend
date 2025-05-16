import { fetcher } from './fetcher';

const DELETE_NOTIFICATIONS_URL =
  'http://localhost:5000/api/notification/delete-all-notifications';

export const deleteAllNotifications = async (token: string) => {
  await fetcher(DELETE_NOTIFICATIONS_URL, { method: 'DELETE', token });
};
