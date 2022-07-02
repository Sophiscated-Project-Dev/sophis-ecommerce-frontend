import React from "react";
import "../styles/Carousel.css";
import HeroImg from "../../assets/images/hero-image.png";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <div className="hero">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 gg" src={HeroImg} alt="First slide" />
          <Carousel.Caption className="hero-text">
            <h3>Best Gadgets Deal</h3>
            <p className="hero-p1">Up to 70% Off! </p>
            <button className="hero-btn">Shop Now </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={HeroImg} alt="Second slide" />

          <Carousel.Caption className="hero-text">
            <h3>Best Gadgets Deal</h3>
            <p className="hero-p1">Up to 70% Off! </p>
            <button className="hero-btn">Shop Now </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={HeroImg} alt="Third slide" />

          <Carousel.Caption className="hero-text">
            <h3>Best Gadgets Deal</h3>
            <p className="hero-p1">Up to 70% Off!</p>
            <button className="hero-btn">Shop Now </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={HeroImg} alt="Fourth slide" />

          <Carousel.Caption className="hero-text">
            <h3>Best Gadgets Deal</h3>
            <p className="hero-p1">Up to 70% Off!</p>
            <button className="hero-btn">Shop Now </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={HeroImg} alt="Fifth slide" />

          <Carousel.Caption className="hero-text">
            <h3>Best Gadgets Deal</h3>
            <p className="hero-p1">Up to 70% Off!</p>
            <button className="hero-btn">Shop Now </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={HeroImg} alt="Sixth slide" />

          <Carousel.Caption className="hero-text">
            <h3>Best Gadgets Deal</h3>
            <p className="hero-p1">Up to 70% Off!</p>
            <button className="hero-btn">Shop Now </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={HeroImg} alt="Seventh slide" />

          <Carousel.Caption className="hero-text">
            <h3>Best Gadgets Deal</h3>
            <p className="hero-p1">Up to 70% Off!</p>
            <button className="hero-btn">Shop Now </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
