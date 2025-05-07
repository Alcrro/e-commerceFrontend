import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface FavoriteStore {
  favorites: ICartData;
  addFavorite: (item: ICartProductList) => void;
  removeFavorite: (productId: string) => void;
  setFavorites: (items: ICartProductList[]) => void;
  updateTotalPrice: () => void;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: {
        _id: '',
        userId: '',
        productCartList: [],
        totalPrice: 0,
      },
      addFavorite: (item) => {
        const newItem: ICartProductList = {
          productId: item.productId,
          quantity: 1,
          price: item.price || item.productDetails.price,
          listName: item.listName || 'favorites',
          productDetails: item.productDetails,
        };
        const exists = get().favorites.productCartList.some(
          (fav) => fav.productId === newItem.productId
        );
        if (!exists) {
          set({
            favorites: {
              ...get().favorites,
              productCartList: [...get().favorites.productCartList, newItem],
            },
          });
        }
      },
      removeFavorite: (productId) =>
        set({
          favorites: {
            ...get().favorites,
            productCartList: get().favorites.productCartList.filter(
              (fav) => fav.productId !== productId
            ),
          },
        }),
      setFavorites: (items) =>
        set({ favorites: { ...get().favorites, productCartList: items } }),
      updateTotalPrice: () => {
        const totalPrice = get().favorites.productCartList.reduce(
          (total, curr) =>
            total + (curr.price || curr.productDetails.price) * curr.quantity,
          0
        );
        set({ favorites: { ...get().favorites, totalPrice } });
      },
    }),
    {
      name: 'favorite-storage', // ✅ Local storage key
      storage: createJSONStorage(() => localStorage),
    }
  )
);
