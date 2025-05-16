import { cartApi } from '@/service/cartApi';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CartStore {
  cart: ICart;
  addToCart: (item: IBaseProduct) => void;
  fetchProduct: () => void;
  removeToCart: (productId: string) => void;
  setCart: (items: ICart) => void;
  updateToProductCart: (productId: string, quantity: number) => void;
}
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: {
        _id: '',
        userId: '',
        productCartList: [],
        totalPrice: 0,
      },
      addToCart: (product) => {
        const { cart } = get();
        const exists = cart.productCartList.find(
          (fav) => fav.productDetails._id === product._id
        );
        if (exists) {
          const updateList = cart.productCartList.map((item) =>
            item.productDetails._id === product._id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  price: item.price + product.price,
                }
              : item
          );
          const newTotal = updateList.reduce(
            (sum, item) => sum + item.price,
            0
          );
          set({
            cart: {
              ...cart,
              productCartList: updateList,
              totalPrice: newTotal,
            },
          });
        } else {
          const newItem = {
            productDetails: product, // ca să fie la fel ca restul
            quantity: 1,
            price: product.price,
          };

          const newList = [...cart.productCartList, newItem];
          const newTotal = cart.totalPrice + product.price;

          set({
            cart: {
              ...cart,
              productCartList: newList,
              totalPrice: newTotal,
            },
          });
        }
      },
      fetchProduct: async () => {
        try {
          const res = await cartApi(); // or your backend route
          const data = res?.data;

          if (data && data.productCartList) {
            const totalPrice = data.productCartList.reduce(
              (sum: number, item: { price: number }) => sum + item.price,
              0
            );
            set({
              cart: {
                _id: data._id,
                userId: data.userId,
                productCartList: data.productCartList,
                totalPrice,
              },
            });
          }
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      },

      removeToCart: (productId) => {
        const { cart } = get();
        const filteredList = cart.productCartList.filter(
          (item) => item.productDetails._id !== productId
        );
        const newTotal = filteredList.reduce(
          (sum, item) => sum + item.price,
          0
        );
        set({
          cart: {
            ...cart,
            productCartList: filteredList,
            totalPrice: newTotal,
          },
        });
      },
      setCart: (items) => {
        const totalPrice = items.productCartList.reduce(
          (sum, item) => sum + item.price,
          0
        );

        set({
          cart: {
            ...get().cart,
            productCartList: items.productCartList,
            totalPrice,
          },
        });
      },
      updateToProductCart: (productId: string, quantity: number) => {
        const { cart } = get();
        const updatedList = cart.productCartList.map((item) =>
          item.productDetails._id === productId
            ? {
                ...item,
                quantity,
                price: item.productDetails.price * quantity,
              }
            : item
        );
        const newTotal = updatedList.reduce((sum, item) => sum + item.price, 0);
        set({
          cart: {
            ...cart,
            productCartList: updatedList,
            totalPrice: newTotal,
          },
        });
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
