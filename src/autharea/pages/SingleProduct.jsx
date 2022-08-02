import data from "../components/RecomProdsData";
import Data from "../../utils/singleProductData";
import "../styles/SingleProduct.css";
import ProductDetail from "../components/ProductDetail";
import SellerCard from "../components/SellerCard";
import DeliveryCard from "../components/DeliveryCard";
import AccessoryDetail from "../components/AccessoryDetail";
import SectionHeader from "../components/SectionHeader";
import ImageSlider from "../components/ImageSlider";

const SingleProduct = () => {
  const{category} = Data
  return (
    <section className=" singleProduct d-flex flex-column justify-content-center align-items-center px-sm-5 pt-5 mb-5">
      {/* Accessories */}
      <div className="container row">
        <h2>
          <span>Home/Phone & Accessories</span>/{category}
        </h2>
        <div className="col-12 col-lg-9 mb-5">
          <AccessoryDetail product={Data} />
          <ProductDetail product={Data} />
        </div>

        <div className="col-12 col-lg-3 d-flex flex-column flex-md-row flex-lg-column">
          <SellerCard product={Data} />
          <DeliveryCard product={Data} />
        </div>
      </div>

      {/* Likes */}
      <div className="productLikes container row mx-auto mt-5 position-relative">
        <SectionHeader title={"You may also like"} product={Data} />
        <ImageSlider data={data} product={Data} />
      </div>

      {/* Frequently Bought Together */}
      <div className="productLikes container row mx-auto mt-5 position-relative">
        <SectionHeader title={"Frequently bought together"} product={Data} />
        <ImageSlider data={data} product={Data} />
      </div>
    </section>
  );
};

export default SingleProduct;
