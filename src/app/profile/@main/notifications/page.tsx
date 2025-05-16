import ProfileMainLayout from '@/components/layouts/profileLayout/ProfileMainLayout';
import NotificationsFetcher from '@/components/profile/main/NotificationsFetcher';

const page = async () => {
  return (
    <ProfileMainLayout>
      {/* <div className="title">Notifications</div> */}
      <NotificationsFetcher params="" />
    </ProfileMainLayout>
  );
};

export default page;
