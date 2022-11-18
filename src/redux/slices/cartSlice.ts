import { createSlice } from "@reduxjs/toolkit";
import { CartProductItem } from "types/cart";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Array<CartProductItem>,
  reducers: {
    addCart: (state, action) => {
      let cartItem = state.find((item) => item.id === action.payload.id);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 } as CartProductItem);
      }
    },
    addCartDiffQuantity: (state, action) => {
      let cartItem = state.find((item) => item.id === action.payload.id);
      if (cartItem) {
        cartItem.quantity += parseInt(action.payload.quantity);
      } else {
        state.push(action.payload);
      }
    },
    editQuantityItem: (state, action) => {
      let cartItem = state.find((item) => item.id === action.payload.id);
      if (cartItem) {
        cartItem.quantity = parseInt(action.payload.quantity);
      }
    },
    clearCart: () => {
      return [] as Array<CartProductItem>
    }
  },
});

export const { addCart, addCartDiffQuantity, editQuantityItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
