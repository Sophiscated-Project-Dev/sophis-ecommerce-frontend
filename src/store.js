import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice'
import { brandsReducer } from "./features/brand/brandSlice";
import checkoutReducer from './features/checkout/checkoutSlice';
import productReducer from "./features/products/productSlice";

import cartReducer from "./features/Cart/cartSlice";

import vendorsReducer from "./features/topVendors/vendorSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    brands: brandsReducer,
    checkout: checkoutReducer,
    product: productReducer,
    cart: cartReducer,
    vendors: vendorsReducer,
  },
});
export default store;
