import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.REACT_APP_BASEURL;

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      };
      const response = await  fetch(`${API_URL}/users/login`, requestOptions);
      const data = await response.json();
      
      // store user's token in local storage
      localStorage.setItem("token", data?.token);
      
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

 
