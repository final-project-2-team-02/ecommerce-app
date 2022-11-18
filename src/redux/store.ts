import { configureStore, combineReducers } from "@reduxjs/toolkit";
import products from "./slices/productSlice/productSlice";
import userAuth from "./slices/userSlice";
import cart from "./slices/cartSlice";
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
