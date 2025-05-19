import NavbarClient from './NavbarClient';
import { getUserApi } from '@/service/userApi';
import { fetchNotificationAPI } from '@/service/notificationApi';
import { getFavoriteApi } from '@/service/favoriteApi';
import { cartApi } from '@/service/cartApi';

const safeApiCall = async (fn: () => Promise<any>) => {
  try {
    return await fn();
  } catch {
    return null;
  }
};

const Navbar = async () => {
  const [user, notifications, favorites, carts] = await Promise.all([
    safeApiCall(getUserApi),
    safeApiCall(fetchNotificationAPI),
    safeApiCall(getFavoriteApi),
    safeApiCall(cartApi),
  ]);

  return (
    <NavbarClient
      user={user?.data || null}
      notifications={notifications?.data || []}
      favorites={favorites?.data || []}
      carts={carts?.data || []}
    />
  );
};

export default Navbar;
