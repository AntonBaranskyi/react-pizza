import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filtersSlice";
import basketReducer from "./slices/basketSlice";
import pizzaReducer from "./slices/pizzaSlice";

export const store = configureStore({
  reducer: {
    filterReducer,
    basketReducer,
    pizzaReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
