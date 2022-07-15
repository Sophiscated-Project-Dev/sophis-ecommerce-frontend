import data from "../components/RecomProdsData";
import "../styles/SingleProduct.css";
import ProductDetail from "../components/ProductDetail";
import SellerCard from "../components/SellerCard";
import DeliveryCard from "../components/DeliveryCard";
import AccessoryDetail from "../components/AccessoryDetail";
import SectionHeader from "../components/SectionHeader";
import ImageSlider from "../components/ImageSlider";

const SingleProduct = () => {
  return (
    <section className=" singleProduct d-flex flex-column justify-content-center align-items-center px-sm-5 pt-5 mb-5">
      {/* Accessories */}
      <div className="container row">
        <h2>
          <span>Home/Phone & Accessories</span>/Earphones & Headphones
        </h2>
        <div className="col-12 col-lg-9 mb-5">
          <AccessoryDetail />
          <ProductDetail />
        </div>

        <div className="col-12 col-lg-3 d-flex flex-column flex-md-row flex-lg-column">
          <SellerCard />
          <DeliveryCard />
        </div>
      </div>

      {/* Likes */}
      <div className="productLikes container row mx-auto mt-5 position-relative">
        <SectionHeader title={"You may also like"} />
        <ImageSlider data={data} />
      </div>

      {/* Frequently Bought Together */}
      <div className="productLikes container row mx-auto mt-5 position-relative">
        <SectionHeader title={"Frequently bought together"} />
        <ImageSlider data={data} />
      </div>
    </section>
  );
};

export default SingleProduct;
