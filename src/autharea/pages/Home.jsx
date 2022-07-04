import React from "react";
import RecomProds from "../components/RecomProds";

const Home = () => {
  return (
    <div>
      <div>{/* -------------------Carousel---------------- */}</div>

      <div>
        {/* -------------------Recommended---------------- */}
        <RecomProds />
      </div>

      <div>{/* -------------------Flash Sales---------------- */}</div>

      <div>{/* -------------------New Arrivals---------------- */}</div>

      <div>{/* -------------------Top Ranked---------------- */}</div>

      <div>{/* -------------------Brands---------------- */}</div>

      <div>{/* -------------------Client Reviews---------------- */}</div>

      <div>{/* -------------------What we offer---------------- */}</div>
    </div>
  );
};

export default Home;
