import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../fetures/api/apiSlice";
import modeSlice from "../fetures/mode/modeSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    mode: modeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
