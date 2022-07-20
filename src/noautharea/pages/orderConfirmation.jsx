import React from "react";
import "../styles/orderConfirmation.css";
import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <div className="O_Confirm">
      <p>Are you sure you want to proceed with the payment ?</p>
      <Link to="/checkout">
        <button className="BTN_1">Proceed</button>
      </Link>
      <Link to="/">
        <button className="BTN_2">Cancel</button>
      </Link>
    </div>
  );
};

export default Confirm;
