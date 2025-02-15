import Favorite from '@/components/favorite/Favorite';
import ProfileMainLayout from '@/components/layouts/profileLayout/ProfileMainLayout';
import { favoriteApi } from '@/service/favoriteApi';
import React from 'react';

const Page = async ({ params }: { params: Promise<{ slug?: string[] }> }) => {
  const slug = (await params).slug;
  const result = slug?.join('').slice(0, -5) as string;
  const favorites = await favoriteApi(result);

  return (
    <ProfileMainLayout>
      <Favorite favorites={favorites?.data || null} />
    </ProfileMainLayout>
  );
};

export default Page;
