'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "@/types/cartitem";

type AddToCartPayload = {
  slug: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  color?: string;
  quantity?: number;
};

type UpdateQuantityPayload = {
  slug: string;
  quantity: number;
  size?: string;
  color?: string;
};

type RemovePayload = {
  slug: string;
  size?: string | null;
  color?: string | null;
};

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add item (merges by slug+size+color)
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const p = action.payload;
      const existing = state.items.find(
        (it) =>
          it.slug === p.slug &&
          (it.selectedSize ?? "") === (p.size ?? "") &&
          (it.selectedColor ?? "") === (p.color ?? "")
      );

      if (existing) {
        existing.quantity += p.quantity ?? 1;
      } else {
        state.items.push({
          slug: p.slug,
          name: p.name,
          price: p.price,
          image: p.image,
          selectedSize: p.size,
          selectedColor: p.color,
          quantity: p.quantity ?? 1,
        });
      }
    },

    // update quantity: if size/color provided, update that unique item; otherwise update all items with that slug
    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const { slug, quantity, size, color } = action.payload;
      state.items.forEach((it) => {
        if (
          it.slug === slug &&
          (size === undefined || (it.selectedSize ?? "") === size) &&
          (color === undefined || (it.selectedColor ?? "") === color)
        ) {
          it.quantity = Math.max(1, quantity);
        }
      });
    },

    removeFromCart: (state, action: PayloadAction<RemovePayload>) => {
      const { slug, size, color } = action.payload;
      state.items = state.items.filter(
        (it) =>
          !(
            it.slug === slug &&
            (it.selectedSize ?? "") === (size ?? "") &&
            (it.selectedColor ?? "") === (color ?? "")
          )
      );
    },

    clearCart: (state) => {
      state.items = [];
    },

    // rehydrate (used by Provider to restore from localStorage on client)
    rehydrateCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload ?? [];
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
  rehydrateCart,
} = cartSlice.actions;

export default cartSlice.reducer;
