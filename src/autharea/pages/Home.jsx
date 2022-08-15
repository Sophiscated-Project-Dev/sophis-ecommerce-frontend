import React from "react";
import RecomProds from "../components/RecomProds";

import NewArrivals from "../components/NewArrivals";
import TopProducts from "../components/TopProducts";
import FlashProducts from "../components/FlashProducts";
import Hero from "../components/Carousel";
import Review from "../components/Review";
import Offers from "../components/Offers";
import "../styles/Home.css";
import BrandsComp from "../components/BrandsComp";
import TopVendors from "../components/TopVendors/TopVendors";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <RecomProds />

      <FlashProducts/>

      <NewArrivals />

      <TopProducts/>


      <BrandsComp />

      <TopVendors />

      <div>{/* -------------------Brands---------------- */}</div>


      <Review />

      <Offers />
    </div>
  );
};

export default Home;
