import { createSlice } from "@reduxjs/toolkit";
import { fetchVendors } from "./vendorActions";

const initialState = {
  loading: false,
  vendors: [],
  error: "",
};

const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  extraReducers: {
    [fetchVendors.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchVendors.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.vendors = payload.topVendors;
    },
    [fetchVendors.rejected]: (state) => {
      state.loading = false;
      state.vendors = [];
      state.error = "failed to fetch vendors, please check your network";
    },
  },
});

export default vendorsSlice.reducer;
