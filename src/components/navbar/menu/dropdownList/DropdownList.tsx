import React from 'react';
import Title from './Title';
import Notifications from './Notifications';
import style from './dropdownList.module.scss';
import ModalLogoutButton from '@/app/auth/components/ModalLogoutButton';
import GoToCart from '@/components/buttons/goTo/GoToCart';
import GoToFavorite from '@/components/buttons/goTo/GoToFavorite';

import { IProductFavoriteList } from '@/service/favoriteApi';
import { IProductCartList } from '@/service/cartApi';
import { INotification } from '@/service/notificationApi';

// Define a type for the fetchData based on the menu label
type FetchDataType<T extends 'account' | 'favorite' | 'cart'> =
  T extends 'account'
    ? INotification[] // Account doesn't have fetchData
    : T extends 'favorite'
      ? IProductFavoriteList[] // Type for favorites
      : T extends 'cart'
        ? IProductCartList[] // Type for cart
        : never;

interface DropdownListProps<T extends 'account' | 'favorite' | 'cart'> {
  menu: { label: T; link: string };
  fetchData: FetchDataType<T> | null; // Fetch data type depends on menu label
  usernameProfile: string | null; // Profile can be of type IProfile or undefined
}

export default function DropdownList<
  T extends 'account' | 'favorite' | 'cart',
>({ menu, fetchData, usernameProfile }: DropdownListProps<T>) {
  const safeFetchData = fetchData ?? []; // Ensure it's always an array

  return (
    <div className={style.modal_inner}>
      <Title description={usernameProfile || 'Guest'} />

      {/* Conditionally pass props to Notifications based on menu.label */}
      {menu.label === 'account' && (
        <>
          <Notifications<INotification>
            fetchData={safeFetchData as INotification[]} // Explicitly cast to INotification[] here
            isLoggedIn={!!usernameProfile} // Pass whether the user is logged in
            menuLabel={menu.label} // Pass the menu label to distinguish between different props
          />
          <ModalLogoutButton />
        </>
      )}

      {/* For 'favorite' menu */}
      {menu.label === 'favorite' && (
        <>
          <Notifications<IProductFavoriteList>
            fetchData={safeFetchData as IProductFavoriteList[]} // Explicitly cast to IProductFavoriteList[]
            isLoggedIn={!!usernameProfile} // Pass whether the user is logged in
            menuLabel={menu.label} // Pass the menu label to distinguish between different props
          />
          <GoToFavorite isLoggedIn={!!usernameProfile} />
        </>
      )}

      {/* For 'cart' menu */}
      {menu.label === 'cart' && (
        <>
          <Notifications<IProductCartList>
            fetchData={safeFetchData as IProductCartList[]} // Explicitly cast to IProductCartList[]
            isLoggedIn={!!usernameProfile} // Pass whether the user is logged in
            menuLabel={menu.label} // Pass the menu label to distinguish between different props
          />
          <GoToCart isLoggedIn={!!usernameProfile} />
        </>
      )}
    </div>
  );
}
