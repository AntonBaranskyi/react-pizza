import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizza = createAsyncThunk("pizzas/fetch", async (params) => {
  const { categoriesCheck, filterId, sort, pageNum } = params;
  const responce = await fetch(
    `https://63f8b2491dc21d5465c4eaf9.mockapi.io/items?${
      categoriesCheck ? `category=${filterId}` : ""
    }${sort ? `&sortBy=${sort}` : ""}&page=${pageNum}&limit=3`
  );

  return await responce.json();
});
const initialState = {
  items: [],
  status: "loading", // loading | success | error
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    getAllPizza: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });

    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.items = action.payload;
      state.status = "error";
    });
  },
});

export const { getAllPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
