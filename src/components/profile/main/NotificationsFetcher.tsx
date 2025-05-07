// NotificationsFetcher.tsx

import React from 'react';
import { fetchNotificationAPI } from '@/service/notificationApi';
import Notifications from './notifications/Notifications';

const NotificationsFetcher = async ({ params }: { params: string }) => {
  const notifications = await fetchNotificationAPI(params);

  return (
    <Notifications
      notifications={!notifications?.data ? null : notifications.data}
    />
  );
};

export default NotificationsFetcher;
