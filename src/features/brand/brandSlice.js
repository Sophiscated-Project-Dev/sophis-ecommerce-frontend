import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./brandActions";

const initialState = {
  loading: false,
  brands: [],
  error: "",
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  extraReducers: {
    [fetchBrands.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchBrands.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.brands = payload.topBrands;
    },
    [fetchBrands.rejected]: (state) => {
      state.loading = false;
      state.brands = [];
      state.error = "kindly check your network";
    },
  },
});

export const brandsReducer = brandsSlice.reducer;
