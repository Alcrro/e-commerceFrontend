import React from 'react';
import style from './notificationCard.module.scss';
import { INotification } from '@/service/notificationApi';

const NotificationCard = ({
  notifications,
}: {
  notifications: INotification;
}) => {
  return (
    <div className={style.notification_card_inner}>
      <div className={style.header}>
        <div
          className={`${style.priority} ${style[notifications.priority]}`}
        ></div>
        <div className={style.category}>{notifications.category}</div>
        <div className={style.title}>
          {notifications.titleNotification} - Lorem ipsum dolor sit amet.
        </div>
      </div>
      <div className={style.body}>
        <div className={style.message}>
          {notifications.message} - Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Placeat a, repellendus sapiente nemo, mollitia
          aspernatur distinctio amet fugit officiis totam ipsam, odio optio
          numquam doloribus vero magnam aperiam qui est.
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.createdAt}>
          {new Date(notifications.createdAt).toLocaleDateString()}
        </div>
        <div className={style.expiredOn}>
          {new Date(notifications.expirationDate) < new Date()
            ? 'Expired'
            : `Expire in ${
                new Date().getDate() -
                new Date(notifications.expirationDate).getDate()
              } day(s)`}
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
