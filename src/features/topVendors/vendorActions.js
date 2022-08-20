import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const API_URL = "https://sophdev.herokuapp.com/api/v1/products/top-vendors";

export const fetchVendors = createAsyncThunk("vendors/fetchVendors", async () => {
  const response = await axios.get(API_URL);
  return response.data; 
});
