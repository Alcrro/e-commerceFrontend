'use client';
import { ICartProductList } from '@/types/CartProductList';
import { syncCartWithDB } from '@/utils/indexedDB/cartIndexedDB';
import {
  addItemDB,
  getItemsDB,
  removeItemFromDB,
  updateItemDB,
} from '@/utils/indexedDB/indexedDB';

import { createContext, ReactNode, useEffect, useState } from 'react';

export interface Item {
  product: ICartProductList;
  meta: {
    id: string;
    productId: string;
    subTotalPrice: number;
    quantity: number;
  };
}

interface CartContextType {
  cart: Item[];
  totalPrice: number;
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
  updateCartItem: (id: string, quantity: number, price: number) => void;
}

export const IndexedContext = createContext<CartContextType | null>(null);

export const IndexedProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Item[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const loadCart = async () => {
      const syncedCart = await syncCartWithDB(); // Sync first, then use synced data
      // const syncedCart = await getItemsDB('cart');
      setCart(syncedCart);
      calculateTotalPrice(syncedCart);
    };

    loadCart();
  }, []);

  const calculateTotalPrice = (cartItems: Item[]) => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.meta.subTotalPrice,
      0
    );
    setTotalPrice(total);
  };

  const addToCart = async (newItem: Item) => {
    await addItemDB('cart', newItem);
    setCart((prevCart) => [...prevCart, newItem]);
    calculateTotalPrice([...cart, newItem]);
  };

  const removeFromCart = async (id: string) => {
    await removeItemFromDB('cart', id);
    const updatedCart = cart.filter((item) => item.meta.id !== id);
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
  };

  const updateCartItem = async (
    id: string,
    quantity: number,
    price: number
  ) => {
    const updatedSubtotal = quantity * price;
    await updateItemDB('cart', id, quantity, updatedSubtotal);

    const updatedCart = cart.map((item) =>
      item.meta.id === id
        ? {
            ...item,
            meta: { ...item.meta, quantity, subTotalPrice: updatedSubtotal },
          }
        : item
    );

    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
  };

  return (
    <IndexedContext.Provider
      value={{ cart, totalPrice, addToCart, removeFromCart, updateCartItem }}
    >
      {children}
    </IndexedContext.Provider>
  );
};
