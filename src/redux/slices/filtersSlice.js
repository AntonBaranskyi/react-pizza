import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterId: 0,
  sort: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterId: (state, action) => {
      state.filterId = action.payload;
    },

    setSort: (state, action) => {
        state.sort = action.payload
    },
  },
});

export const { setFilterId,setSort } = filtersSlice.actions;

export default filtersSlice.reducer;
