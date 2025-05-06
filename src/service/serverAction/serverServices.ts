import { addToCartApi } from '../cartApi';
import { addToFavoriteApi, deleteProductFavoriteApi } from '../favoriteApi';
import { deleteProductCartApi } from '../cartApi';
import { updateAddressApi } from '../addressApi';
import { getOrdersApi } from '../ordersApi';
import { signUpApi } from '../signUpApi';
import { loginApiTest } from '../loginApi';
import { logoutApi } from '../logoutApi';

import {
  deleteAllViewedNotificationsAPI,
  deleteNotificationAPI,
  updatedAllViewedNotificationsAPI,
  updateNotificationAPI,
} from '../notificationApi';

export const serverServices: IServerServices = {
  register: async (data) => signUpApi(data.email, data.password),

  login: async (data) => loginApiTest(data.email, data.password),

  logout: async () => logoutApi(),

  addToCart: async (data) => addToCartApi(data.productId, data.price),

  addToFavorite: async (data) => addToFavoriteApi(data.productId, data.price),
  deleteToFavoriteCart: async (data) =>
    deleteProductFavoriteApi(data.productId),

  deleteProductCart: async (data) => deleteProductCartApi(data.productId),

  getOrder: async (data) => getOrdersApi(data.status, data.data),

  updateAddress: async (data) => updateAddressApi(data.address),

  updateNotification: async (data) =>
    updateNotificationAPI(data.notificationId),

  deleteNotification: async (data) =>
    deleteNotificationAPI(data.notificationId),

  updateAllViewedNotification: async () => updatedAllViewedNotificationsAPI(),

  deleteAllViewedNotification: async () => deleteAllViewedNotificationsAPI(),
};
