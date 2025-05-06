import MainLayout from '@/components/layouts/mainLayout/MainLayout';
import React from 'react';

const page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const slug = (await params).slug;
  return <MainLayout>{slug}</MainLayout>;
};

export default page;
