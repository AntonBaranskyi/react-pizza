import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterId: 0,
  sort: "",
  pageNum: 1,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterId: (state, action) => {
      state.filterId = action.payload;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },

    setPageNum: (state, action) => {
      state.pageNum = action.payload;
    },
  },
});

export const { setFilterId, setSort, setPageNum } = filtersSlice.actions;

export default filtersSlice.reducer;
