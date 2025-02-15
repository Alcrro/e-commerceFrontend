import React from 'react';
import style from './notifications.module.scss';
import { fetchNotificationAPI } from '@/service/notificationApi';
import NotificationCard from './NotificationCard';

const Notifications = async () => {
  const notifications = await fetchNotificationAPI();

  if (!notifications?.data) {
    return <div>You don't have notification</div>;
  }
  return (
    <div className={style.notifications_container_outer}>
      <div className={style.title}>Notifications</div>
      <div className={style.notification_container_inner}>
        {notifications.data.map((notification) => (
          <NotificationCard
            notifications={notification}
            key={notification._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
