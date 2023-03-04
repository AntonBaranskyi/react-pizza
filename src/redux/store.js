import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filtersSlice";

export const store = configureStore({
  reducer: {
    filterReducer,
  },
});
