import { IProfile } from '@/service/userApi';
import React from 'react';
import MenuItem from '../../MenuItem';
import MenuItemTitle from '../../MenuItemTitle';
import { ICart, IProductCartList } from '@/service/cartApi';

interface Props {
  menu: { label: 'account' | 'favorite' | 'cart'; link: string };
  userProfile: IProfile | null;
  fetchData: IProductCartList[] | null;
}
function Cart({ menu, userProfile, fetchData }: Props) {
  if (!userProfile) {
    return <MenuItemTitle menu={menu} userProfile={userProfile} />;
  }

  return (
    <MenuItem<'cart'>
      menu={menu}
      userProfile={userProfile}
      fetchData={fetchData}
    />
  );
}

export default Cart;
