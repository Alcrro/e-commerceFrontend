import ProfileMainLayout from '@/components/layouts/profileLayout/ProfileMainLayout';
import Notifications from '@/components/profile/main/notifications/Notifications';

import React from 'react';

const page = async () => {
  return (
    <ProfileMainLayout>
      {/* <div className="title">Notifications</div> */}
      <Notifications />
    </ProfileMainLayout>
  );
};

export default page;
