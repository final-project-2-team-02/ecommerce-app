import { CartProductItem } from "types/cart";
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Product, SoldProduct } from "types/product";

export type ProductSliceState = {
  productStock: Array<Product>;
  soldProducts: Array<SoldProduct>;
};

export const addSoldProductReducer: CaseReducer<
  ProductSliceState,
  PayloadAction<Array<CartProductItem>>
> = (state, action) => {
  action.payload.forEach((element) => {
    let soldItem = state.soldProducts.find((item) => item.id === element.id);
    if (soldItem) {
      soldItem.quantity += element.quantity;
    } else {
      state.soldProducts.push(element);
    }

    let product = state.productStock.find((item) => item.id === element.id);
    if (product) {
      product.quantity -= element.quantity;
    }
  });
};

export const editStockProductReducer: CaseReducer<
  ProductSliceState,
  PayloadAction<{ id: number; quantity: number }>
> = (state, action) => {
  let product = state.productStock.find(
    (item) => item.id === action.payload.id
  );
  if (product) {
    product.quantity = action.payload.quantity;
  }
};
