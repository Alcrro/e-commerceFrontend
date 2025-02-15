import Address from '@/components/profile/main/address/Address';
import MyAccount from '@/components/profile/main/myaccount/MyAccount';
import Notifications from '@/components/profile/main/notifications/Notifications';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <MyAccount />
      <Address />
      <Notifications />
    </div>
  );
};

export default page;
