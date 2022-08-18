import { createAsyncThunk } from "@reduxjs/toolkit";


const API_URL = "https://sophdev.herokuapp.com/api/v1/products/top-brands";

export const fetchBrands = createAsyncThunk("brands/fetchBrands", async () => {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();
  return data;
});
