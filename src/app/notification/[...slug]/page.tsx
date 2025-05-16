import MainLayout from '@/components/layouts/mainLayout/MainLayout';

import React from 'react';

const page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  return <MainLayout>Notification {slug}</MainLayout>;
};

export default page;
