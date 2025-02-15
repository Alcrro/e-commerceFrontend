import React from 'react';
import style from './sidebar.module.scss';
import SidebarLink from './SidebarLink';
import ProfileTab from '@/components/profile/sidebar/profileTab/ProfileTab';
import userFetch from '../@services/userFetch';
import AuxTab from '@/components/profile/sidebar/auxTab/AuxTab';

const menuItems = [
  { label: 'Address', href: '/profile/address', iconClass: 'icon_address' },
  { label: 'Orders', href: '/profile/orders', iconClass: 'icon_orders' },
  { label: 'Favorite', href: '/profile/favorite', iconClass: 'icon_favorite' },
  { label: 'Settings', href: '/profile/settings', iconClass: 'icon_settings' },
  { label: 'Cart', href: '/profile/cart', iconClass: 'icon_cart' },
  {
    label: 'Notification',
    href: '/profile/notification',
    iconClass: 'icon_notification',
  },
];

const Default = async () => {
  const user = await userFetch();

  return (
    <div className={style.profile_side_bar}>
      <div className={style.profile_side_bar_inner}>
        <div className={style.profile_side_bar_tab}>
          <ProfileTab user={user?.data || null} />
          <AuxTab />
        </div>
        <div className={style.profile_side_bar_list}>
          <ul>
            {menuItems?.map((item) => (
              <li key={item.href}>
                <SidebarLink item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Default;
