import { secondDepartmentMenu } from '@/constants/secondDepartmentMenu';
import React from 'react';
import Error404 from './error';
import MainLayout from '@/components/layouts/mainLayout/MainLayout';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  const exist = secondDepartmentMenu.some((filter) => filter.link === slug[0]);

  if (!exist) {
    return <Error404 />;
  }
  return <MainLayout>{slug}</MainLayout>;
};

export default page;
