import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice'
import {brandsReducer} from "./features/brand/brandSlice";
import productReducer from "./features/products/productSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    brands: brandsReducer,
    product: productReducer,
  },
});
export default store;
