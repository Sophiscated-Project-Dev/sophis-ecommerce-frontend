import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://sophdev.herokuapp.com/api/v1";

export const fetchBrands = createAsyncThunk("brands/fetchBrands", async () => {
  const response = await fetch(`${API_URL}/products/top-brands`);
  const data = await response.json();
  return data;
});
