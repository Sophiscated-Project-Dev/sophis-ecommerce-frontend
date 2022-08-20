import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "./userActions";

// initialize token from local storage
const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  token,
  error: null,
  success: false, // for monitoring the login process.
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;

      return state;
    },
    logOut: (state) => {
      localStorage.removeItem("token");
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: {
    // user registration
    [userRegister.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.loading = false;
      state.success = true;
    },
    [userRegister.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userRegister.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      // state.errorMessage = payload.message;
    },
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.token = payload.token;
    },
    [userLogin.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { clearState, logOut} = userSlice.actions;

export default userSlice.reducer;
