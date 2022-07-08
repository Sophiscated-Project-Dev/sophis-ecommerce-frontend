import React from "react";
import { Card, Button } from "react-bootstrap";
import CartLaptop from "../../assets/cart-img/cartlaptop.png";

export const CartItems = ({
  id,
  productName,
  vendor,
  img,
  newPrice,
  oldPrice,
  discount,
}) => {
  return (
    <div key={id} className="cart-card-body-item mb-4 pt-2">
      {/* <div> */}
      <div className="cart-img-spec ">
        <img src={img} alt="" className="cart-img" />
        <div className="cart-spec-cust">
          <p className="cart-p-1">{productName}</p>
          <p className="cart-p-2">
            Vendor: <span>{vendor}</span>
          </p>
        </div>
      </div>
      <div className="flex-last">
        <div className="cart-incr-decr-btn">
          <span className="span-first">-</span>
          <span className="span-second">2</span>
          <span className="span-third">+</span>
        </div>
        <div className="cart-price">
          <p className="first-p">${newPrice}</p>
          <div>
            <span className="second-span1">${oldPrice}</span>{" "}
            <span className="second-span2">-{discount}%</span>
          </div>
          <button className="cart-price-btn">Remove</button>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};
