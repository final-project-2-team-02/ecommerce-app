import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "types/product";
import {
  addSoldProductReducer,
  editStockProductReducer,
  ProductSliceState,
} from "./productReducer";

const apiUrl = "https://fakestoreapi.com/products";
export const fetchProducts = createAsyncThunk("products/all", async () => {
  const response = await fetch(apiUrl);
  return response.json() as unknown as Array<Product>;
});

export const productSlice = createSlice({
  name: "products",
  initialState: { productStock: [], soldProducts: [] } as ProductSliceState,
  reducers: {
    addSoldProductReducer,
    editStockProductReducer,
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const getProduct = action.payload.map((item) => {
        return { ...item, quantity: 20 };
      });

      state.productStock = getProduct;
    });
  },
});

export const {
  addSoldProductReducer: addSoldProducts,
  editStockProductReducer: editStockProduct,
} = productSlice.actions;
export default productSlice.reducer;
