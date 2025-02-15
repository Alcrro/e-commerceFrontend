import { fetchNotificationAPI } from '@/service/notificationApi';
import { favoriteApi } from '@/service/favoriteApi';
import { cartApi } from '@/service/cartApi';

export async function getMenuData(menuLabel: string) {
  if (menuLabel === 'account') {
    const notifications = await fetchNotificationAPI();
    return notifications?.data || null;
  }
  if (menuLabel === 'favorite') {
    const favorites = await favoriteApi();
    return favorites?.data?.productFavoriteList || null;
  }
  if (menuLabel === 'cart') {
    const cartItems = await cartApi();
    return cartItems?.data?.productCartList || null;
  }
  return null;
}
