import React from 'react';
import style from './notification.module.scss';
const Notification = ({ data }: { data?: [] | null | undefined }) => {
  if (!data?.length) {
    return null;
  }

  return (
    <div className={style.notification_container}>
      <div className={style.notification_inner}>{data.length}</div>
    </div>
  );
};

export default Notification;
