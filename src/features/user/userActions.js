import { createAsyncThunk } from "@reduxjs/toolkit";

// const API_URL = process.env.REACT_APP_BASEURL;
const API_URL = "https://sophdev.herokuapp.com/api/v1";
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
      const response = await fetch(`${API_URL}/users/login`, requestOptions);
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

export const userRegister = createAsyncThunk(
  "user/register",
  async (
    { firstName, lastName, email, phoneNumber, password, confirmPassword },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(
        "https://sophdev.herokuapp.com/api/v1/users/register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            confirmPassword,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      // store user's token in local storage
      // localStorage.setItem("token", data?.token);
      // return data;

      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return data;
      }
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
