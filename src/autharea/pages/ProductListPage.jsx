import React from "react";
import ImageSlider from "../components/ImageSlider";
import { LaptopListComs } from "../components/LaptopListComs";
import SectionHeader from "../components/SectionHeader";
import data from "../components/RecomProdsData";

const ProductListPage = () => {
  return (
    <div>
      <LaptopListComs />
      {/* Frequently Bought Together */}
      <div className="productLikes container row mx-auto mb-4 position-relative">
        <SectionHeader title={"Frequently bought together"} />
        <ImageSlider data={data} />
      </div>
    </div>
  );
};

export default ProductListPage;
