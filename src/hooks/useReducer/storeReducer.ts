import { IProduct } from '@/service/productsApi';

// storeReducer.ts
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';

// ✅ Add Async Action Types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// ✅ Define State Type
export interface State {
  cart: IProduct[];
  favorites: IProduct[];
  products: IProduct[]; // Store fetched products
  loading: boolean;
  error: string | null;
}

// ✅ Define Action Type
export type Action =
  | { type: 'ADD_TO_CART'; payload: IProduct }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'ADD_TO_FAVORITE'; payload: IProduct }
  | { type: 'REMOVE_FROM_FAVORITE'; payload: string }
  | { type: 'FETCH_PRODUCTS_REQUEST' }
  | { type: 'FETCH_PRODUCTS_SUCCESS'; payload: IProduct[] }
  | { type: 'FETCH_PRODUCTS_FAILURE'; payload: string };

// ✅ Initial State
export const initialState: State = {
  cart: [],
  favorites: [],
  products: [],
  loading: false,
  error: null,
};

// ✅ Reducer Function (Handle API Actions)
export const storeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    case ADD_TO_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item._id !== action.payload
        ),
      };
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
