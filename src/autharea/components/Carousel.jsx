import React from "react";
import "../styles/Carousel.css";
import Hero from "../../assets/images/hero-image.png";

function Carousel() {
  return (
    <div className="hero">
      <img src={Hero} alt="" className="hero-img" />
      <div className="hero-text">
        <h1>Best Gadget Deals</h1>
        <p className="hero-p1">Up to 70% Off!</p>
        <button className="hero-btn">Shop Now</button>
      </div>
    </div>
  );
}

export default Carousel;
