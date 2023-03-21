import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IPizza } from "../../components/pages/Home";


interface IParams {
  categoriesCheck: boolean;
  filterId: number;
  sort: string;
  pageNum: number
}

export const fetchPizza = createAsyncThunk("pizzas/fetch", async (params: IParams) => {
  const { categoriesCheck, filterId, sort, pageNum } = params;
  const responce = await fetch(
    `https://63f8b2491dc21d5465c4eaf9.mockapi.io/items?${categoriesCheck ? `category=${filterId}` : ""
    }${sort ? `&sortBy=${sort}` : ""}&page=${pageNum}&limit=3`
  );

  return (await responce.json() as IPizza[]);
});

interface IpizzaState {
  items: IPizza[];
  status: 'loading' | 'success' | 'error';
}
const initialState: IpizzaState = {
  items: [],
  status: "loading",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    getAllPizza: (state, action: PayloadAction<IPizza[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchPizza.fulfilled, (state, action: PayloadAction<IPizza[]>) => {
      state.items = action.payload;
      state.status = "success";
    });

    builder.addCase(fetchPizza.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { getAllPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
