import React from "react";
import RecomProds from "../components/RecomProds";
import NewArrivals from "../components/NewArrivals";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div>{/* -------------------Carousel---------------- */}</div>

      <RecomProds />

      <div>{/* -------------------Flash Sales---------------- */}</div>

      <NewArrivals />

      <div>{/* -------------------Top Ranked---------------- */}</div>

      <div>{/* -------------------Brands---------------- */}</div>

      <div>{/* -------------------Client Reviews---------------- */}</div>

      <div>{/* -------------------What we offer---------------- */}</div>
    </div>
  );
};

export default Home;
