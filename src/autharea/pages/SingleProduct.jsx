import '../styles/SingleProduct.css'
import ProductDetail from "../components/ProductDetail";
import SellerCard from '../components/SellerCard';
import DeliveryCard from '../components/DeliveryCard';
import AccessoryDetail from '../components/AccessoryDetail';

const SingleProduct = () => {
  return (
    <section className=" singleProduct d-flex justify-content-center align-items-center px-sm-5 mb-5">
      {/* Accessories */}
      <div className="container row">
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
      <div></div>

      {/* Frequently Bought Together */}
      <div></div>
    </section>
  );
};

export default SingleProduct;
