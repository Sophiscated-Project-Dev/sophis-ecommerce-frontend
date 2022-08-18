import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice'
import { brandsReducer } from "./features/brand/brandSlice";
import checkoutReducer from './features/checkout/checkoutSlice';
import productReducer from "./features/products/productSlice";
import vendorsReducer from "./features/topVendors/vendorSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    brands: brandsReducer,
    checkout: checkoutReducer,
    product: productReducer,
    vendors: vendorsReducer,
  },
});
export default store;
