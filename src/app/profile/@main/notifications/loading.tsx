import React from 'react';
import SkeletonCard from '@/components/ui/skeleton/notificationSkeleton/NotificationSkeletonCard';
import style from '@/components/profile/main/notifications/notifications.module.scss';
import OrderByNotification from '@/components/profile/main/notifications/filters/OrderByNotification';
import DeleteAllNotifications from '@/components/ui/notification/DeleteAllNotifications';
import ViewAllNotifications from '@/components/ui/notification/ViewAllNotifications';
import { cookies } from 'next/headers';
import { fetchNotificationAPI } from '@/service/notificationApi';
const Loading = async ({}) => {
  const cookieStore = cookies();
  const token = (await cookieStore).get('authToken')?.value;

  if (!token) return undefined;

  const notifications = await fetchNotificationAPI('');
  const numberOfSkeletons = notifications?.data?.length ?? 3; // Adjust this based on expected count

  return (
    <div className={style.notifications_container_outer}>
      <div className={style.title}>
        <div className="description">Notifications</div>
        <div className="total_notifications">
          <span>loading</span> - <span>notifications</span>
        </div>
      </div>
      <div className="filters flex gap-2 mb-4">
        <OrderByNotification />
        <ViewAllNotifications token={token} />
        <DeleteAllNotifications token={token} />
      </div>
      <div className={style.notification_container_inner}>
        {/* You can show multiple skeletons if you want */}
        {Array.from({ length: numberOfSkeletons }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Loading;
