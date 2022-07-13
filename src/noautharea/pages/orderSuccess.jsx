import React from "react";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Order_Success.css";
import Check from "../../assets/images/Vector-24.png";
import Circle from "../../assets/images/Ellipse-142.png";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="O_Success">
      <h1>Great Choice!</h1>
      <div className="mtt-62">
        <img src={Check} alt="" className="O_Success-chk" />
        <img src={Circle} alt="" className="O_Success-C" />
      </div>
      <h2>Order Successful</h2>
      <h4>Your order number</h4>
      <h3>#12789</h3>
      <p>Estimated time of delivery</p>
      <h5>Friday 24, July 2022</h5>
      <Link to="/">
        <button className="O_Success-btn">Back Home</button>
      </Link>
    </div>
  );
};

export default OrderSuccess;
