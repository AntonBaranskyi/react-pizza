import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface IFilterState {
  filterId: number;
  sort: string;
  pageNum: number
}

const initialState: IFilterState = {
  filterId: 0,
  sort: "",
  pageNum: 1,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterId: (state, action: PayloadAction<number>) => {
      state.filterId = action.payload;
    },

    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },

    setPageNum: (state, action: PayloadAction<number>) => {
      state.pageNum = action.payload;
    },
  },
});

export const { setFilterId, setSort, setPageNum } = filtersSlice.actions;

export default filtersSlice.reducer;
