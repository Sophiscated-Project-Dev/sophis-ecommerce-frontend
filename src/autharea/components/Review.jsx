import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Review.css";

const Review = () => {
  return (
    <div className="reviews">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators CI">
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
          {/* INDICATORS STOP */}
        </div>
        <div className="carousel-inner">
          {/* CONTENT START*/}
          <div className="carousel-item active tete">
            <div className="carousel-caption ">
              <h2 className="review-title">Clients Review</h2>
              <p className="review-comment">
                This is so far the best website for my online shopping. They
                keep to time and you can monitor your goods anytime, anyday till
                it gets to your doorstep. Did I mention they offer 24/7 customer
                services? It is simply the best out there.{" "}
              </p>
              <img
                src="https://i.ibb.co/yQKt8nS/Ellipse-1.png"
                alt=""
                className="review-client"
              />
              <h4 className="review-client-name">Emmanuella Richson</h4>
              <p className="review-rating">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="review-star"
                >
                  <path
                    d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                    fill="#F6CA2E"
                  />
                </svg>
                4.8
              </p>
            </div>
          </div>
          <div className="carousel-item tete">
            <div className="carousel-caption ">
              <h2 className="review-title">Clients Review</h2>
              <p className="review-comment">
                This is so far the best website for my online shopping. They
                keep to time and you can monitor your goods anytime, anyday till
                it gets to your doorstep. Did I mention they offer 24/7 customer
                services? It is simply the best out there.{" "}
              </p>
              <img
                src="https://i.ibb.co/t3GGxqf/Ellipse-3.png"
                alt=""
                className="review-client"
              />
              <h4 className="review-client-name">James Brown</h4>
              <p className="review-rating">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="review-star"
                >
                  <path
                    d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                    fill="#F6CA2E"
                  />
                </svg>
                4.5
              </p>
            </div>
          </div>
          <div className="carousel-item tete">
            <div className="carousel-caption ">
              <h2 className="review-title">Clients Review</h2>
              <p className="review-comment">
                This is so far the best website for my online shopping. They
                keep to time and you can monitor your goods anytime, anyday till
                it gets to your doorstep. Did I mention they offer 24/7 customer
                services? It is simply the best out there.{" "}
              </p>
              <img
                src="https://i.ibb.co/GQQRdcK/Ellipse-2.png"
                alt=""
                className="review-client"
              />
              <h4 className="review-client-name">Yusuf dande</h4>
              <p className="review-rating">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="review-star"
                >
                  <path
                    d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                    fill="#F6CA2E"
                  />
                </svg>
                4.4
              </p>
            </div>
          </div>
          <div className="carousel-item tete">
            <div className="carousel-caption ">
              <h2 className="review-title">Clients Review</h2>
              <p className="review-comment">
                This is so far the best website for my online shopping. They
                keep to time and you can monitor your goods anytime, anyday till
                it gets to your doorstep. Did I mention they offer 24/7 customer
                services? It is simply the best out there.{" "}
              </p>
              <img
                src="https://i.ibb.co/yQKt8nS/Ellipse-1.png"
                alt=""
                className="review-client"
              />
              <h4 className="review-client-name">Emmanuella Richson</h4>
              <p className="review-rating">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="review-star"
                >
                  <path
                    d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                    fill="#F6CA2E"
                  />
                </svg>
                4.8
              </p>
            </div>
          </div>
          <div className="carousel-item tete">
            <div className="carousel-caption ">
              <h2 className="review-title">Clients Review</h2>
              <p className="review-comment">
                This is so far the best website for my online shopping. They
                keep to time and you can monitor your goods anytime, anyday till
                it gets to your doorstep. Did I mention they offer 24/7 customer
                services? It is simply the best out there.{" "}
              </p>
              <img
                src="https://i.ibb.co/t3GGxqf/Ellipse-3.png"
                alt=""
                className="review-client"
              />
              <h4 className="review-client-name">James Brown</h4>
              <p className="review-rating">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="review-star"
                >
                  <path
                    d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                    fill="#F6CA2E"
                  />
                </svg>
                4.5
              </p>
            </div>
          </div>
          {/* CONTENT STOP */}
        </div>
        {/* CONTROL START */}
        <button
          className="carousel-control-prev CCP"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon CCPI"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next CCN"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon CCNI"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        {/* CONTROL STOP */}
      </div>
    </div>
  );
};

export default Review;
