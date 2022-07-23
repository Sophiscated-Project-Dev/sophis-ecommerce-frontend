import React from "react";

const ToCart = () => {
  return (
    <div
      className="O_Confirm"
      style={{
        margin: "10vh auto",
        maxHeight: "200px",
      }}
    >
      <p style={{ fontSize: "20px" }}>
        The product has been added to cart{" "}
        <span style={{ color: "#2a6fea" }}>successfully!!</span>{" "}
      </p>
    </div>
  );
};

export default ToCart;
