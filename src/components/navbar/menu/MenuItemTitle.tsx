import Link from 'next/link';
import React from 'react';
import style from './guestMenuItem.module.scss';
import { IProfile } from '@/service/userApi';
import Notification from '@/components/notification/Notification';
import { favoriteApi } from '@/service/favoriteApi';
import { cartApi } from '@/service/cartApi';
import { fetchNotificationAPI } from '@/service/notificationApi';

const MenuItemTitle = async ({
  menu,
  userProfile,
}: {
  menu: { label: string; link: string };
  userProfile: IProfile | null;
}) => {
  if (!userProfile) {
    return (
      <Link
        href={`/${menu.link}`}
        className={`${style.guest_navbar_menu} relative`}
      >
        <div className={`${style[menu.label]} relative`}>
          {menu.label !== 'account' && <Notification />}
        </div>
        <div className={style.navbar_menu_description}>{menu.label}</div>
      </Link>
    );
  }

  let fetchingData: any = null;
  if (menu.label === 'favorite') {
    const favorite = await favoriteApi();
    if (!favorite) {
      return (fetchingData = []);
    }
    fetchingData = favorite?.data?.productCartList;
  }
  if (menu.label === 'account') {
    const notifications = await fetchNotificationAPI();

    if (!notifications) {
      return (fetchingData = []);
    }
    fetchingData = notifications?.data;
  }
  if (menu.label === 'cart') {
    const cart = await cartApi();

    if (!cart) {
      return (fetchingData = []);
    }

    fetchingData = cart?.data?.productCartList;
  }

  return (
    <Link href={`/profile/${menu.link}`} className={`${style.navbar_menu}`}>
      <div className={`${style[menu.label]} relative`}>
        <Notification data={fetchingData} />
      </div>
      <div className={style.navbar_menu_description}>{menu.label}</div>
    </Link>
  );
};

export default MenuItemTitle;
