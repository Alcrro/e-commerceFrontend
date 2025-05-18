'use client';
import { getMenuItems } from '@/constants/navbarDataMenu';
import React, { useEffect, useMemo, useState } from 'react';
import MenuItem from './MenuItem';

import { useNotificationStore } from '@/store/useNotificationStore';
import { useFavoriteStore } from '@/store/useFavoriteStore';
import { useCartStore } from '@/store/useCartStore';
import { isEmpty } from '@/utils/isEmpty';
import CustomIcon from '@/components/ui/icon/defaultIcon/Icon';
import SearchInput from '@/components/ui/searchBox/SearchInput';
import SearchButton from '@/components/ui/buttons/searchButon/SearchButton';
interface IMenuProps {
  user: IProfile;
  notifications: INotification[];
  favorite: IFavorite;
  cart: ICart;
}

const Menu = ({ user, notifications, favorite, cart }: IMenuProps) => {
  const notificationsLocalStore = useNotificationStore(
    (state) => state.notifications
  );
  const favoritesLocalStore = useFavoriteStore((state) => state.favorites);
  const cartsLocalStore = useCartStore((state) => state.cart);
  const notificationsToUse = isEmpty(notifications)
    ? notificationsLocalStore
    : notifications;
  const favoritesToUse = isEmpty(favorite) ? favoritesLocalStore : favorite;
  const cartToUse = isEmpty(cart) ? cartsLocalStore : cart;

  const menuItems = useMemo(
    () => getMenuItems(user, notificationsToUse, favoritesToUse, cartToUse),
    [
      user,
      notifications,
      favorite,
      cart,
      notificationsLocalStore,
      favoritesLocalStore,
      cartsLocalStore,
    ]
  );
  return (
    <div className="flex items-center gap-1 ">
      {menuItems.length > 0 ? (
        menuItems.map(({ key, ...rest }, index) => (
          <MenuItem
            key={key}
            {...rest}
            alignRight={index === menuItems.length - 1}
          />
        ))
      ) : (
        <span className="text-sm text-gray-400">No menu items</span>
      )}
    </div>
  );
};

export default Menu;
