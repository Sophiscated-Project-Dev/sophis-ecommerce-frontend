import { createSlice } from "@reduxjs/toolkit";
import { getNewArrivals, getTopRanked } from "./productActions";

const initialState = {
  loading: false,
  newArrivals: [],
  topRanked: [],
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getNewArrivals.pending]: (state) => {
      state.loading = true;
    },
    [getNewArrivals.fulfilled]: (state, { payload }) => {
      // console.log("payload", payload);
      state.loading = false;
      state.newArrivals = payload;
      state.error = null;
    },
    [getNewArrivals.rejected]: (state, { payload }) => {
      //   console.log("payload", payload);
      state.loading = false;
      state.newArrivals = [];
      state.error = true;
    },
    // TOP RANKED
    [getTopRanked.pending]: (state) => {
      state.loading = true;
    },
    [getTopRanked.fulfilled]: (state, { payload }) => {
      // console.log("payload", payload);
      state.loading = false;
      state.topRanked = payload;
      state.error = null;
    },
    [getTopRanked.rejected]: (state, { payload }) => {
      // console.log("payload", payload);
      state.loading = false;
      state.topRanked = [];
      state.error = true;
    },
  },
});

export default productSlice.reducer;
