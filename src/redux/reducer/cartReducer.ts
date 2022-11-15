import { createSlice } from "@reduxjs/toolkit";
import { CartProductItem } from "types/cart";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Array<CartProductItem>,
  reducers: {
    addCart: (state, action) => {
      if (state.some((item) => item.id === action.payload.id)) {
        return state.map((item) =>
          item.id === action.payload.id
            ? ({
                ...item,
                quantity: item.quantity + 1,
              } as CartProductItem)
            : item
        ) as CartProductItem[];
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            title: action.payload.title,
            quantity: 1,
            price: action.payload.price,
            image: action.payload.image,
          } as CartProductItem,
        ];
      }
    },
    addCartDiffQuantity: (state, action) => {
      if (state.some((item) => item.id === action.payload.id)) {
        return state.map((item) =>
          item.id === action.payload.id
            ? ({
                ...item,
                quantity: item.quantity + parseInt(action.payload.quantity),
              } as CartProductItem)
            : item
        ) as CartProductItem[];
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            title: action.payload.title,
            quantity: 1,
            price: action.payload.price,
            image: action.payload.image,
          } as CartProductItem,
        ];
      }
    },
    editQuantityItem: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: parseInt(action.payload.quantity),
            }
          : item
      );
    },
  },
});

export const { addCart, addCartDiffQuantity, editQuantityItem } =
  cartSlice.actions;
export default cartSlice.reducer;
