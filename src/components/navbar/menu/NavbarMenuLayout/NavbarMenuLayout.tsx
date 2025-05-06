'use client';
import ThemeToggle from '@/components/ThemeToggle';
import ModalElementsList from '@/components/ui/navbar/modalElementsList/ModalElementsList';
import Link from 'next/link'; // ✅ Correct import
import React, { useEffect } from 'react';
import style from '../items/menu.module.scss';
import Account from '../items/account/Account';
import Cart from '../items/cart/Cart';
import Favorite from '../items/favorite/Favorite';
import MenuItem from '../MenuItem';
import Notification from '@/components/notification/Notification'; // Missing in your paste
import CustomIcon from '@/components/ui/icon/Icon';
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
      <div className={`${style.account}`}>
        <MenuItem
          title="Account"
          isLoggedIn={!!user?.username}
          icon={
            <CustomIcon
              srcIsEnabled={!!user}
              src={avatarIcon}
              classname={`${user ? 'w-[45px] h-[45px] rounded-full' : ''}`}
              size={24}
              iconUnicode="\F4E1"
              notificationIcon={
                <Notification
                  data={newNotifications}
                  classname="top-[2px] right-[-8px]"
                />
              }
            />
          }
          listIcon={
            <CustomIcon
              srcIsEnabled={false}
              size={14}
              iconUnicode="\F229"
              classname={''}
            />
          }
          classname="flex gap-2 items-center relative"
        >
          <div className={style.account_content}>
            <ModalElementsList>
              {user ? (
                <Account data={user} userNotifications={newNotifications} />
              ) : (
                <div className="p-4 text-center">
                  <div>0 notifications</div>
                  <div className="text-center relative w-full">
                    <Link href="/auth/login">Login</Link>
                  </div>
                </div>
              )}
            </ModalElementsList>
          </div>
        </MenuItem>
      </div>

      {/* Favorite */}
      <div className={style.favorite}>
        <MenuItem
          title="Favorite"
          isLoggedIn={!!user?.username}
          classname=""
          icon={
            <CustomIcon
              srcIsEnabled={false}
              size={26}
              classname="flex items-center h-[45px] relative top-[-2px]"
              iconUnicode="\F417"
              notificationIcon={
                <Notification
                  data={
                    !favoriteItems?.productCartList
                      ? favorites.productCartList
                      : favoriteItems.productCartList
                  }
                  classname="top-[2px] right-[-5px]"
                />
              }
            />
          }
          listIcon={
            <CustomIcon
              srcIsEnabled={false}
              size={14}
              iconUnicode="\F229"
              classname="flex items-center"
            />
          }
        >
          <div className={style.favorite_content}>
            <ModalElementsList>
              {favoriteItems || favorites ? (
                <Favorite
                  data={!favoriteItems ? favorites : favoriteItems}
                  username={user?.username}
                />
              ) : (
                <p className="p-4 text-center">No favorites yet</p>
              )}
            </ModalElementsList>
          </div>
        </MenuItem>
      </div>

      {/* Cart */}
      <div className={style.cart}>
        <MenuItem
          title="Cart"
          isLoggedIn={!!user?.username}
          icon={
            <CustomIcon
              srcIsEnabled={false}
              size={24}
              iconUnicode="\F243"
              classname="items-center relative h-[45px] top-[-4px]"
              notificationIcon={
                <Notification
                  data={cartItems?.productCartList}
                  classname="top-[0px] right-[-5px]"
                />
              }
            />
          }
          listIcon={
            <CustomIcon
              srcIsEnabled={false}
              size={14}
              iconUnicode="\F229"
              classname="flex"
            />
          }
          classname="flex gap-1 items-center"
        >
          <div className={style.cart_content}>
            <ModalElementsList>
              {cartItems ? (
                <Cart data={cartItems} username={user?.username} />
              ) : (
                <p className="p-4">Your cart is empty</p>
              )}
            </ModalElementsList>
          </div>
        </MenuItem>
      </div>
    </div>
  );
};

export default NavbarMenuLayout;
