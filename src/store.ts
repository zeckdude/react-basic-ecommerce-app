import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { CartItem } from './types';

export type StoreState = {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
};

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        setCart: (cart: CartItem[]) => set({ cart }),
      }),
      {
        name: 'react-basic-ecommerce-app',
      },
    ),
  ),
);
