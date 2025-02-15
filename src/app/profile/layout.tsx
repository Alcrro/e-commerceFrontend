import MainLayout from '@/components/layouts/mainLayout/MainLayout';
import ProfileLayout from '@/components/layouts/profileLayout/ProfileLayout';
import React, { ReactNode } from 'react';
import style from './layout.module.scss';
import { fetchMetadata, IMetadata } from '@/service/metadata/fetchMetadata';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  const params = await fetchMetadata('profile');
  if (!params) {
    return { title: 'ALCRRO - Profile' };
  }

  return { ...params.data?.metadata, ...params.data?.metadata };
};

const layout = ({
  children,
  sidebar,
  main,
  modal,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  main: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <MainLayout>
      <ProfileLayout>
        {sidebar}
        <div className={style.profile_main}>{main}</div>
      </ProfileLayout>
      {modal}
    </MainLayout>
  );
};

export default layout;
