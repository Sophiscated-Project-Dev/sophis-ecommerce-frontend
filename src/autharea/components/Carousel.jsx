import React from "react";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Carousel.css";
import HeroImg1 from "../../assets/Carousel/hero-image-1.png";
import HeroImg2 from "../../assets/Carousel/hero-image-2.png";
import HeroImg3 from "../../assets/Carousel/hero-image-3.png";
import HeroImg4 from "../../assets/Carousel/hero-image-4.png";
import HeroImg5 from "../../assets/Carousel/hero-image-5.png";

const Hero = () => {
  return (
    <div className="hero">
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators CI-C">
          {/* INDICATORS START*/}
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          {/* INDICATORS STOP */}
        </div>
        <div className="carousel-inner">
          {/* CONTENT START*/}
          <div className="carousel-item active hght ">
            {" "}
            <img className="d-block  gg" src={HeroImg1} alt="First slide" />
            <div className="carousel-caption  hero-text">
              <h3>Best Gadgets Deal </h3>
              <p className="hero-p1">Up to 70% Off! </p>
              <button className="hero-btn">Shop Now </button>
            </div>
          </div>
          <div className="carousel-item  hght">
            <img className="d-block gg" src={HeroImg2} alt="First slide" />
            <div className="carousel-caption  hero-text">
              <h3>Best Clothing Deal</h3>
              <p className="hero-p1">Up to 70% Off! </p>
              <button className="hero-btn">Shop Now </button>
            </div>
          </div>
          <div className="carousel-item  hght">
            <img className="d-block gg" src={HeroImg3} alt="First slide" />
            <div className="carousel-caption  hero-text">
              <h3>Best Gadgets Deal</h3>
              <p className="hero-p1">Up to 70% Off! </p>
              <button className="hero-btn">Shop Now </button>
            </div>
          </div>
          <div className="carousel-item  hght">
            <img className="d-block gg" src={HeroImg4} alt="First slide" />
            <div className="carousel-caption  hero-text">
              <h3>Best Clothing Deal</h3>
              <p className="hero-p1">Up to 70% Off! </p>
              <button className="hero-btn">Shop Now </button>
            </div>
          </div>
          <div className="carousel-item  hght">
            <img className="d-block gg" src={HeroImg5} alt="First slide" />
            <div className="carousel-caption  hero-text">
              <h3>Best Gadgets Deal</h3>
              <p className="hero-p1">Up to 70% Off! </p>
              <button className="hero-btn">Shop Now </button>
            </div>
          </div>
          <div className="carousel-item  hght">
            <img className="d-block gg" src={HeroImg1} alt="First slide" />
            <div className="carousel-caption  hero-text">
              <h3>Best Gadgets Deal</h3>
              <p className="hero-p1">Up to 70% Off! </p>
              <button className="hero-btn">Shop Now </button>
            </div>
          </div>
          <div className="carousel-item  hght">
            {" "}
            <img className="d-block gg" src={HeroImg2} alt="First slide" />
            <div className="carousel-caption  hero-text">
              <h3>Best Clothing Deal</h3>
              <p className="hero-p1">Up to 70% Off! </p>
              <button className="hero-btn">Shop Now </button>
            </div>
          </div>
          {/* CONTENT STOP */}
        </div>
        {/* CONTROL START */}
        <button
          className="carousel-control-prev CCP-C"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon CCPI-C"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next CCN-C"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon CCNI-C"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        {/* CONTROL STOP */}
      </div>
    </div>
  );
};

export default Hero;
