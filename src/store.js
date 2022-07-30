import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice'
import {brandsReducer} from "./features/brand/brandSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    brands: brandsReducer
  },
});
export default store;
