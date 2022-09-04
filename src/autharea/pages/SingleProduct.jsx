// import data from "../components/RecomProdsData";
import "../styles/SingleProduct.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductDetail from "../components/ProductDetail";
// import SellerCard from "../components/SellerCard";
import DeliveryCard from "../components/DeliveryCard";
import AccessoryDetail from "../components/AccessoryDetail";
import SectionHeader from "../components/SectionHeader";
import ImageSlider from "../components/ImageSlider";
import axios from "axios";
import { useEffect, useState } from "react";

const PRODUCT_ID = "https://sophdev.herokuapp.com/api/v1/products";

const SingleProduct = () => {
  const { productId } = useParams();
  const { newArrivals } = useSelector((state) => state.product);
  // console.log(newArrivals);
  const [productDetail, setProductDetail] = useState([]);
  const fetchProductById = async () => {
    try {
      const response = await axios.get(`${PRODUCT_ID}/${productId}`, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${JSON.parse(localStorage.getItem("data"))}`,
        },
      });
      // console.log(response.data);
      const { data } = response;
      setProductDetail(data);
    } catch (err) {
      console.log(err.response);
    }
  };

  const scroll = () => window.scrollTo(0, 0);
  useEffect(() => {
    fetchProductById();
    scroll();
  }, [productId]);

  const { product } = productDetail;

  return (
    <section className=" singleProduct d-flex flex-column justify-content-center align-items-center px-sm-5 pt-5 mb-5">
      {/* Accessories */}
      <div className="container row">
        <h2>
          <span>Home/Phone & Accessories</span>/Earphones & Headphones
        </h2>
        <div className="col-12 col-lg-9 mb-5">
          <AccessoryDetail product={product} />
          <ProductDetail product={product} />
        </div>

        <div className="col-12 col-lg-3 d-flex flex-column flex-md-row flex-lg-column">
          {/* <SellerCard product={product} /> */}
          <DeliveryCard />
        </div>
      </div>

      {/* Likes */}
      <div className="productLikes container row mx-auto mt-5 position-relative">
        <SectionHeader title={"You may also like"} />
        <ImageSlider data={newArrivals} />
      </div>

      {/* Frequently Bought Together */}
      <div className="productLikes container row mx-auto mt-5 position-relative">
        <SectionHeader title={"Frequently bought together"} />
        <ImageSlider data={newArrivals} />
      </div>
    </section>
  );
};

export default SingleProduct;
