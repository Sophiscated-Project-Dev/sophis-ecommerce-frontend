import React from "react";
import RecomProds from "../components/RecomProds";
import NewArrivals from "../components/NewArrivals";
import Hero from "../components/Carousel";
import Review from "../components/Review";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />

      <RecomProds />

      <div>{/* -------------------Flash Sales---------------- */}</div>

      <NewArrivals />

      <div>{/* -------------------Top Ranked---------------- */}</div>

      <div>{/* -------------------Brands---------------- */}</div>

      <Review />

      <div>{/* -------------------What we offer---------------- */}</div>
    </div>
  );
};

export default Home;
