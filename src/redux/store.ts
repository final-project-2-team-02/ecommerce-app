import { configureStore, combineReducers } from "@reduxjs/toolkit";
import products from "./reducer/productReducer";
import userAuth from "./reducer/userReducer";
import cart from "./reducer/cartReducer";

const reducer = combineReducers({
  products,
  userAuth,
  cart,
});

export const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
