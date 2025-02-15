'use client';
// StoreContext.tsx
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import {
  State,
  Action,
  storeReducer,
  initialState,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  ADD_TO_CART,
  ADD_TO_FAVORITE,
} from './useReducer/storeReducer';
import { API_SERVER } from '@/constants/apiConstants';
import { IProduct } from '@/service/productsApi';

// ✅ Define Context Type
interface StoreContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

// ✅ Create Context
const StoreContext = createContext<StoreContextType | undefined>(undefined);

// ✅ Provider Component
const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState); // Now using imported reducer
  // const [token, setToken] = useState<string | null>(null);
  // useEffect(() => {
  //   const getCookie = (name: string) => {
  //     const match = document.cookie.match(
  //       new RegExp('(^| )' + name + '=([^;]+)')
  //     );
  //     return match ? match[2] : null;
  //   };

  //   setToken(getCookie('authToken')); // Read cookie from document.cookie
  // }, []);

  // // ✅ Fetch Cart from API
  // const fetchCart = async () => {
  //   try {
  //     const response = await fetch(`${API_SERVER}/api/cart/get-cart`); // Fetch user's cart
  //     const cartData = await response.json();
  //     cartData.forEach((item: IProduct) =>
  //       dispatch({ type: ADD_TO_CART, payload: item })
  //     );
  //   } catch (error) {
  //     console.error('Failed to fetch cart');
  //   }
  // };

  // // ✅ Fetch Favorites from API
  // const fetchFavorites = async () => {
  //   try {
  //     const response = await fetch(`${API_SERVER}/api/favorite/get-favorite`); // Fetch user's favorites
  //     const favoriteData = await response.json();
  //     favoriteData.forEach((item: IProduct) =>
  //       dispatch({ type: ADD_TO_FAVORITE, payload: item })
  //     );
  //   } catch (error) {
  //     console.error('Failed to fetch favorites');
  //   }
  // };

  // fetchCart();
  // fetchFavorites();
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

// ✅ Custom Hook for Using Context
const useStore = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within a StoreProvider');
  return context;
};

// ✅ Export Everything
export { StoreProvider, useStore };
