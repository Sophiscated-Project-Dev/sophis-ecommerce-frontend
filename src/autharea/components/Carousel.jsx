import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Carousel.css";
import HeroImg from "../../assets/images/hero-image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div
        id="carouselExampleIndicators"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators CI-C">
          {/* INDICATORS START*/}
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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
          <div class="carousel-item active hght ">
            {" "}
            <img className="d-block  gg" src={HeroImg} alt="First slide" />
            <div class="carousel-caption  hero-text">
              <h3>Best Gadgets Deal</h3>
              <p className="hero-p1">Up to 70% Off! </p>
              <button className="hero-btn">Shop Now </button>
            </div>
          </div>
          <div class="carousel-item  hght">
            <img className="d-block gg" src={HeroImg} alt="First slide" />
            <div class="carousel-caption  hero-text">
              <h3>Best Gadgets Deal</h3>
              <p className="hero-p1">Up to 70% Off! </p>
              <button className="hero-btn">Shop Now </button>
            </div>
          </div>
          <div class="carousel-item  hght">
            <img className="d-block gg" src={HeroImg} alt="First slide" />
            <div class="carousel-caption  hero-text">
              <h3>Best Gadgets Deal</h3>
              <p className="hero-p1">Up to 70% Off! </p>
              <button className="hero-btn">Shop Now </button>
            </div>
          </div>
          <div class="carousel-item  hght">
            <img className="d-block gg" src={HeroImg} alt="First slide" />
            <div class="carousel-caption  hero-text">
              <h3>Best Gadgets Deal</h3>
              <p className="hero-p1">Up to 70% Off! </p>
              <button className="hero-btn">Shop Now </button>
            </div>
          </div>
          <div class="carousel-item  hght">
            <img className="d-block gg" src={HeroImg} alt="First slide" />
            <div class="carousel-caption  hero-text">
              <h3>Best Gadgets Deal</h3>
              <p className="hero-p1">Up to 70% Off! </p>
              <button className="hero-btn">Shop Now </button>
            </div>
          </div>
          <div class="carousel-item  hght">
            <img className="d-block gg" src={HeroImg} alt="First slide" />
            <div class="carousel-caption  hero-text">
              <h3>Best Gadgets Deal</h3>
              <p className="hero-p1">Up to 70% Off! </p>
              <button className="hero-btn">Shop Now </button>
            </div>
          </div>
          <div class="carousel-item  hght">
            {" "}
            <img className="d-block gg" src={HeroImg} alt="First slide" />
            <div class="carousel-caption  hero-text">
              <h3>Best Gadgets Deal</h3>
              <p className="hero-p1">Up to 70% Off! </p>
              <button className="hero-btn">Shop Now </button>
            </div>
          </div>
          {/* CONTENT STOP */}
        </div>
        {/* CONTROL START */}
        <button
          class="carousel-control-prev CCP-C"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon CCPI-C"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next CCN-C"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon CCNI-C"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
        {/* CONTROL STOP */}
      </div>
    </div>
  );
};

export default Hero;
