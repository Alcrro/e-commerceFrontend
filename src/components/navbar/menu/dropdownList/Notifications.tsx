import { INotification } from '@/service/notificationApi';

interface NotificationsProps<T> {
  fetchData: T[] | []; // Data specific to the menu (e.g., notifications, favorites, cart items)
  isLoggedIn: boolean;
  menuLabel: 'favorite' | 'cart' | 'account'; // Which menu is being displayed
}

const Notifications = <T,>({
  fetchData,
  isLoggedIn,
  menuLabel,
}: NotificationsProps<T>) => {
  // Type guard for INotification
  const isNotification = (item: any): item is INotification => {
    return item && item.titleNotification !== undefined;
  };

  // Type guard for IProductFavoriteList
  const isFavorite = (item: any): item is ICartProductList => {
    return (
      item && item.productDetails !== undefined && item.productId !== undefined
    );
  };

  // Type guard for IProductCartList
  const isCartItem = (item: any): item is ICartProductList => {
    return item && item.productDetails !== undefined && item.id !== undefined;
  };

  return (
    <div>
      {menuLabel === 'account' && (
        <div>
          {isLoggedIn ? (
            <ul>
              {fetchData.map((item) => {
                if (isNotification(item)) {
                  return <li key={item._id}>{item.titleNotification}</li>;
                }
                return null; // Shouldn't happen as we're in the "account" section, but just in case
              })}
            </ul>
          ) : (
            'Please log in to see notifications'
          )}
        </div>
      )}

      {menuLabel === 'favorite' && (
        <div>
          {isLoggedIn ? (
            <ul>
              {fetchData.map((item) => {
                if (isFavorite(item)) {
                  return (
                    <li key={item.productId}>{item.productDetails.name}</li>
                  );
                }
                return null;
              })}
            </ul>
          ) : (
            'Please log in to see favorites'
          )}
        </div>
      )}

      {menuLabel === 'cart' && (
        <div>
          {isLoggedIn ? (
            <ul>
              {fetchData.map((item) => {
                if (isCartItem(item)) {
                  return (
                    <li key={item.productId}>{item.productDetails.name}</li>
                  );
                }
                return null;
              })}
            </ul>
          ) : (
            'Please log in to view your cart'
          )}
        </div>
      )}
    </div>
  );
};

export default Notifications;
