import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProductItem } from "types/cart";
import { ProductSold } from "types/product";

type State = {
  productSold: Array<ProductSold>;
};

const addProductSoldData: CaseReducer<
  State,
  PayloadAction<Array<CartProductItem>>
> = (state, action) => {
  console.log(
    state.productSold.some((item) => item.id === 1),
    action.payload
  );

  let newArray: Array<ProductSold> = [];

  action.payload.forEach((element) => {
    if (state.productSold.some((item) => item.id === element.id)) {
      newArray = state.productSold.map((item) =>
        item.id === element.id
          ? {
              ...item,
              quantity: item.quantity + element.quantity,
            }
          : item
      );
    } else {
      newArray.push({
        id: element.id,
        image: element.image,
        price: element.price,
        quantity: element.quantity,
        title: element.title,
      });
    }
  });

  return { productSold: [...newArray] } as State;
};

export const adminDataReducer = createSlice({
  name: "adminData",
  initialState: { productSold: [] } as State,
  reducers: {
    addProductSold: addProductSoldData,
  },
});

export const { addProductSold } = adminDataReducer.actions;
export default adminDataReducer.reducer;
