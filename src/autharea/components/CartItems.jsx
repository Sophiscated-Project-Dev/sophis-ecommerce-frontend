import React from "react";

// import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import CartLaptop from "../../assets/cart-img/cartlaptop.png";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
} from "../../features/Cart/cartSlice";

export const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  // console.log(item);
  const discountPerc = item?.discount * 100;
  const grossPrice = discountPerc / 100;

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };
  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="cart-card-body-item mb-4 pt-2">
      {/* <div> */}
      <div className="cart-img-spec ">
        <img src={item?.images[0]} alt="" className="cart-img" />
        <div className="cart-spec-cust">
          <p className="cart-p-1">{item?.name.slice(0, 40)}</p>
          <p className="cart-p-2">
            Vendor: <span>{item?.vendor.firstName}</span>
          </p>
        </div>
      </div>
      <div className="flex-last">
        <div className="cart-incr-decr-btn">
          <span className="span-first" onClick={() => handleDecreaseCart(item)}>
            -
          </span>
          <span className="span-second">{item?.cartQuantity}</span>
          <span className="span-third" onClick={() => handleIncreaseCart(item)}>
            +
          </span>
        </div>
        <div className="cart-price">
          <p className="first-p">${item?.price * item?.cartQuantity}</p>
          <div>
            <span className="second-span1">
              ${grossPrice * item?.price + item?.price}
            </span>{" "}
            <span className="second-span2">-{item?.discount}%</span>
          </div>
          <button
            className="cart-price-btn"
            onClick={() => handleRemoveFromCart(item)}
          >
            Remove
          </button>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};
