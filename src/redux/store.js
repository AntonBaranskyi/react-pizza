import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filtersSlice";
import basketReducer from "../redux/slices/basketSlice";
import pizzaReducer from "../redux/slices/pizzaSlice";

export const store = configureStore({
  reducer: {
    filterReducer,
    basketReducer,
    pizzaReducer
  },
});
