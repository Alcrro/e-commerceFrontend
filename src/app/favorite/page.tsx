import Favorite from '@/components/favorite/Favorite';
import MainLayout from '@/components/layouts/mainLayout/MainLayout';
import ProfileMainLayout from '@/components/layouts/profileLayout/ProfileMainLayout';
import { favoriteApi } from '@/service/favoriteApi';
import React from 'react';

const Page = async () => {
  const favorites = await favoriteApi('');

  return (
    <ProfileMainLayout>
      <Favorite favorites={favorites?.data || null} />
    </ProfileMainLayout>
  );
};

export default Page;
