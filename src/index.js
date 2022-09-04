// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./autharea/pages/Home";
import Login from "./noautharea/pages/Login";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Layout from "./Layout";
import Register from "./noautharea/pages/Register";
import SingleProduct from "./autharea/pages/SingleProduct";
import CartComps from "./autharea/components/CartComps";
import Checkout from "./autharea/pages/Checkout";
import ToCart from "./noautharea/pages/addToCart";
import OrderSuccess from "./noautharea/pages/orderSuccess";
import Confirm from "./noautharea/pages/orderConfirmation";
import ProductListPage from "./autharea/pages/ProductListPage";
import { getCartTotal } from "./features/Cart/cartSlice";
import UserProfile from "./autharea/pages/UserProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));

store.dispatch(getCartTotal());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={2000} />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="/:productId" element={<SingleProduct />} />
            <Route path="/allProducts" element={<ProductListPage />} />
            <Route path="/successful" element={<OrderSuccess />} />
            <Route path="cart" element={<CartComps />} />
            <Route path="/confirm-order" element={<Confirm />} />
            <Route path="/add-to-cart" element={<ToCart />} />
            <Route path="/userProfile" element={<UserProfile />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
