import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL_New_ARRIVAL =
  "https://sophdev.herokuapp.com/api/v1/products/new-arrivals";

// Generates pending, fulfilled and rejected action types
export const getNewArrivals = createAsyncThunk(
  "product/getNewArrivals",
  async (thunkAPI) => {
    const response = await axios.get(URL_New_ARRIVAL);
    return response.data;
  }
  //   async () => {
  //     return fetch(
  //       "https://sophdev.herokuapp.com/api/v1/products/new-arrivals"
  //     ).then((res) => res.json());
  //   }
);
