import { fetchNotificationByIdAPI } from '@/service/notificationApi';
import React from 'react';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  const notifications = await fetchNotificationByIdAPI(slug);
  console.log(notifications?.data);

  if (!notifications) {
    return null;
  }

  return (
    <div>
      {notifications?.data((notification) => (
        <li key={notification._id}>{notification.titleNotification}</li>
      ))}
    </div>
  );
};

export default page;
