import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import "../styles/CartComps.css";
import { CartItems } from "./CartItems";
// import CartLaptop from "../../assets/cart-img/cartlaptop.png";
// import CartBag from "../../assets/cart-img/cartbag.png";
// import CartShoe from "../../assets/cart-img/cartshoe.png";
import { Link } from "react-router-dom";
import { clearCart, getCartTotal } from "../../features/Cart/cartSlice";

const CartComps = () => {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartTotalAmount);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems, dispatch]);

  const handleclearCart = () => dispatch(clearCart());
  return (
    <div className="cart-comps">
      <div className="container change-p5">
        <div className="cart-header">Cart</div>
        {cartItems.length === 0 ? (
          <div className="container m-5 ">
            <h2>No Cart Items Yet</h2>
            <div style={{ fontSize: "1.5rem" }} className="py-3">
              <Link to="/">Start Shopping</Link>
            </div>
          </div>
        ) : (
          <Card className="cart-card mt-2">
            <Card.Header className="d-flex justify-content-between cart-card-top ">
              <h3 className="card-card-product">Product</h3>
              <div className="d-flex cart-card-top-text">
                <h3 className="text1">Quantity</h3>
                <h3 className="text2">Price</h3>
              </div>
            </Card.Header>
            <Card.Body>
              {/* <Card.Title>Special title treatment</Card.Title> */}
              {cartItems.map((item) => {
                // console.log(item);
                return <CartItems item={item} key={item?._id} />;
              })}
            </Card.Body>
            <div className="cart-card-summary">
              <h3>Cart Summary</h3>
            </div>
            <div className="cart-summary-content px-5">
              <div className="sub-total-cart my-1  d-flex justify-content-between">
                <p className="sub-tot-p1">Sub Total</p>
                <p className="sub-tot-p2">${cartTotalAmount}</p>
              </div>
              <div className="delivery-cart my-1  d-flex justify-content-between">
                <p className="delivery-cart-p1">Delivery</p>
                <p className="delivery-cart-p2">--</p>
              </div>
              <div className="total-cart my-1  d-flex justify-content-between">
                <p className="total-cart-p1">Total</p>
                <p className="total-cart-p2">${cartTotalAmount}</p>
              </div>
            </div>
            <hr />
            <div
              style={{
                textAlign: "start",
                color: "orangered",
                fontSize: "1.5rem",
              }}
              className="cont-shopping  m-4"
              onClick={() => handleclearCart()}
            >
              Clear Cart
            </div>
            <div className="cart-checkout">
              <h3>
                <Link
                  to="/checkout"
                  style={{ color: "white" }}
                  className="cart-checkout-btn"
                >
                  Checkout $3,000
                </Link>
              </h3>
            </div>
            <div className="cont-shopping py-3">
              <Link to="/">Continue Shopping</Link>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CartComps;
