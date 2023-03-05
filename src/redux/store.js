import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filtersSlice";
import pizzaReducer from "../redux/slices/pizzaSlice";

export const store = configureStore({
  reducer: {
    filterReducer,
    pizzaReducer,
  },
});
