import Link from 'next/link';
import React from 'react';
import style from './notificationContent.module.scss';

const NotificationContent = ({
  notification,
}: {
  notification: INotification;
}) => {
  return (
    <li key={notification._id} className={style.notification_li}>
      <Link
        href={`/notification/${notification._id}`}
        className={style.notification_link}
      >
        <div
          className={`${style[`priority_${notification.priority.toLocaleLowerCase()}_container`]}`}
        ></div>
        <div className={style.title_container}>
          {notification.titleNotification}
        </div>
      </Link>
    </li>
  );
};

export default NotificationContent;
