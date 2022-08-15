import React from "react";
import { Card} from "react-bootstrap";
import "../styles/CartComps.css";
import { CartItems } from "./CartItems";
import CartLaptop from "../../assets/cart-img/cartlaptop.png";
import CartBag from "../../assets/cart-img/cartbag.png";
import CartShoe from "../../assets/cart-img/cartshoe.png";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    productName: "Name Of Laptop",
    vendor: "tokio",
    img: CartLaptop,
    newPrice: 450,
    oldPrice: 500,
    discount: 5,
  },
  {
    id: 2,
    productName: "Name Of Laptop",
    vendor: "tokio",
    img: CartBag,
    newPrice: 450,
    oldPrice: 500,
    discount: 5,
  },
  {
    id: 3,
    productName: "Name Of Laptop",
    vendor: "tokio",
    img: CartShoe,
    newPrice: 450,
    oldPrice: 500,
    discount: 5,
  },
];

const CartComps = () => {

  return (
    <div className="cart-comps">
      <div className="container change-p5">
        <div className="cart-header">Cart</div>
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
            {data.map((item) => {
              return <CartItems {...item} key={item.id} />;
            })}
          </Card.Body>
          <div className="cart-card-summary">
            <h3>Cart Summary</h3>
          </div>
          <div className="cart-summary-content px-5">
            <div className="sub-total-cart my-1  d-flex justify-content-between">
              <p className="sub-tot-p1">Sub Total</p>
              <p className="sub-tot-p2">$2,000</p>
            </div>
            <div className="delivery-cart my-1  d-flex justify-content-between">
              <p className="delivery-cart-p1">Delivery</p>
              <p className="delivery-cart-p2">--</p>
            </div>
            <div className="total-cart my-1  d-flex justify-content-between">
              <p className="total-cart-p1">Total</p>
              <p className="total-cart-p2">$2,000</p>
            </div>
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
          <div className="cont-shopping py-3">Continue Shopping</div>
        </Card>
      </div>
    </div>
  );
};

export default CartComps;
