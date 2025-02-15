import {
  favoriteApi,
  IFavorite,
  IProductFavoriteList,
} from '@/service/favoriteApi';
import { cartApi, ICart, IProductCartList } from '@/service/cartApi';
import { userApi, IProfile } from '@/service/userApi';
import Account from './account/Account';
import Cart from './cart/Cart';
import Favorite from './favorite/Favorite';
import style from './menu.module.scss';
import {
  fetchNotificationAPI,
  INotification,
  IUserNotification,
} from '@/service/notificationApi';
import ThemeToggle from '@/components/ThemeToggle';

interface MenuProps {
  label: 'account' | 'favorite' | 'cart';
  link: string;
}

// ✅ `Menu` is now an async **server component**
const Menu = async () => {
  // Fetch all data **in parallel**
  const [userData, notificationData, favoriteData, cartData] =
    await Promise.all([
      userApi(),
      fetchNotificationAPI(),
      favoriteApi(),
      cartApi(),
    ]);

  // ✅ Destructure `data` directly instead of `?.data || null`
  const userProfile: IProfile | null = userData?.data || null;
  const notifications: INotification[] | null = notificationData?.data || null;
  const favorites: IProductFavoriteList[] =
    favoriteData?.data?.productFavoriteList || [];
  const cartItems: IProductCartList[] = cartData?.data?.productCartList || [];

  const menuItems: MenuProps[] = [
    { label: 'account', link: 'auth/login' },
    { label: 'favorite', link: 'favorite' },
    { label: 'cart', link: 'cart' },
  ];

  // ✅ Use an object lookup instead of `switch`
  const components = {
    account: (
      <Account
        key="account"
        menu={menuItems[0]}
        userProfile={userProfile}
        fetchData={notifications}
      />
    ),
    favorite: (
      <Favorite
        key="favorite"
        menu={menuItems[1]}
        userProfile={userProfile}
        fetchData={favorites}
      />
    ),
    cart: (
      <Cart
        key="cart"
        menu={menuItems[2]}
        userProfile={userProfile}
        fetchData={cartItems}
      />
    ),
  };

  return (
    <div className={style.navbar_menu_container}>
      <ThemeToggle />
      {menuItems.map((item) => components[item.label])}
    </div>
  );
};

export default Menu;
