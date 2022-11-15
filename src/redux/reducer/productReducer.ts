import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "types/product";

const apiUrl = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk("products/all", async () => {
  const response = await fetch(apiUrl);
  return (await response.json()) as unknown as Array<Product>;
});

export const productSlice = createSlice({
  name: "products",
  initialState: Array<Product>,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action) =>
        (state = action.payload.map((item) => {
          return { ...item, quantity: 20 } as Product;
        }))
    );
  },
});

export default productSlice.reducer;
