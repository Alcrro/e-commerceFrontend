import ProfileMainLayout from '@/components/layouts/profileLayout/ProfileMainLayout';
import Orders from '@/components/orders/Orders';
import OrdersList from '@/components/orders/orderList/OrdersList';
import React from 'react';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <ProfileMainLayout>
      <Orders />
      <OrdersList status={slug[0]} timestamp={slug[1]} />
    </ProfileMainLayout>
  );
};

export default page;
