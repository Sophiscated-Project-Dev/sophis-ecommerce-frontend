import React from "react";
import RecomProds from "../components/RecomProds";
import NewArrivals from "../components/NewArrivals";
import Hero from "../components/Carousel";
import Review from "../components/Review";
import "../styles/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Link to="/successful">
        <div>ORDER SUCCESFUL</div>
      </Link>
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
