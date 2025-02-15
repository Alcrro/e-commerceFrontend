import ProfileMainLayout from '@/components/layouts/profileLayout/ProfileMainLayout';
import Address from '@/components/profile/main/address/Address';

import React from 'react';

const page = async () => {
  return (
    <ProfileMainLayout>
      <Address />
    </ProfileMainLayout>
  );
};

export default page;
