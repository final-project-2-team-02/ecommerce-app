import { configureStore, combineReducers } from "@reduxjs/toolkit";
import products from "./reducer/productReducer";
import userAuth from "./reducer/userReducer";
import cart from "./reducer/cartReducer";
import adminData from "./reducer/adminDataReducer"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({
  products,
  userAuth,
  cart,
  adminData
});

const persistedReducer = persistReducer({ key: "root", storage }, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type of all state reducer
export type AppDispatch = typeof store.dispatch;

export const persistedStore = persistStore(store);
