import ProfileMainLayout from '@/components/layouts/profileLayout/ProfileMainLayout';
import Notifications from '@/components/profile/main/notifications/Notifications';
import NotificationsFetcher from '@/components/profile/main/NotificationsFetcher';
import { fetchNotificationAPI } from '@/service/notificationApi';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const notifications = await fetchNotificationAPI(slug);

  return (
    <ProfileMainLayout
      classname={`${!notifications?.data || notifications.data?.length < 1 ? 'min-h-full' : ''}`}
    >
      {/* <div className="title">Notifications</div> */}

      <Notifications
        notifications={!notifications?.data ? null : notifications?.data}
        // notifications={slug}
      />
    </ProfileMainLayout>
  );
};

export default page;
