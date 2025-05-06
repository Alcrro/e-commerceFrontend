type ServerAction =
  | 'register'
  | 'login'
  | 'logout'
  | 'addToCart'
  | 'addToFavorite'
  | 'deleteToFavoriteCart'
  | 'deleteProductCart'
  | 'getOrder'
  | 'updateAddress'
  | 'updateNotification'
  | 'deleteNotification'
  | 'updateAllViewedNotification'
  | 'deleteAllViewedNotification';

type IServerServices = {
  [key in ServerAction]: (data: Record<string, any>) => Promise<any>;
};
