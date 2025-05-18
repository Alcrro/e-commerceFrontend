'use client';
import ThemeToggle from '@/components/ThemeToggle';
import ModalElementsList from '@/components/ui/navbar/modalElementsList/ModalElementsList';
import Link from 'next/link'; // ✅ Correct import
import React, { use, useEffect } from 'react';
import style from '../items/menu.module.scss';

import { useFavoriteStore } from '@/store/useFavoriteStore';

interface INavbarLayout {
  user: IProfile | undefined;
  notifications: INotification[] | null;
  cartItems: ICartData | null;
  favoriteItems: ICartData | null;
  avatarIcon: string | null;
  newNotifications: INotification[] | null;
}

const NavbarMenuLayout = ({
  user,
  notifications,
  cartItems,
  favoriteItems,
  avatarIcon,
  newNotifications,
}: INavbarLayout) => {
  const favorites = useFavoriteStore((store) => store.favorites);

  return (
    <div className="flex items-center gap-6">
      <ThemeToggle />
      <div className="navbar_menu">
        <div className="account_container"></div>
      </div>
    </div>
  );
};

export default NavbarMenuLayout;
