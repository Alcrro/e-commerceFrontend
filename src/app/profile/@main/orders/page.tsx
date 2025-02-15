import ProfileMainLayout from '@/components/layouts/profileLayout/ProfileMainLayout';
import Orders from '@/components/orders/Orders';
import OrdersList from '@/components/orders/orderList/OrdersList';
import React from 'react';

const page = () => {
  return (
    <ProfileMainLayout>
      <Orders />
      <OrdersList />
    </ProfileMainLayout>
  );
};

export default page;
