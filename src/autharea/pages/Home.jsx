import React from "react";
import RecomProds from "../components/RecomProds";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <div>
      <div>{/* -------------------Carousel---------------- */}</div>

      <RecomProds/>

      <div>{/* -------------------Flash Sales---------------- */}</div>

      <NewArrivals/>

      <div>{/* -------------------Top Ranked---------------- */}</div>

      <div>{/* -------------------Brands---------------- */}</div>

      <div>{/* -------------------Client Reviews---------------- */}</div>

      <div>{/* -------------------What we offer---------------- */}</div>
    </div>
  );
};

export default Home;
