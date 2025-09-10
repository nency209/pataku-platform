// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/cartslice";
import wishlistReducer from "@/redux/wishlistslice"; 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
