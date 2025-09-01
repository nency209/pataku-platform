"use client";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { rehydrateCart } from "@/redux/cartslice";

/**
 * This client component:
 *  - reads 'cart' from localStorage once on mount and dispatches rehydrateCart
 *  - subscribes to store and persists cart items on every change
 */
export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      if (raw) {
        const parsed = JSON.parse(raw);
        store.dispatch(rehydrateCart(parsed));
      }
    } catch (e) {
      // ignore
    }

    const unsubscribe = store.subscribe(() => {
      try {
        localStorage.setItem("cart", JSON.stringify(store.getState().cart.items));
      } catch (e) {
        // ignore
      }
    });

    return unsubscribe;
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
