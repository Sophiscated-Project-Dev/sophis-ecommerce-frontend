import { AiFillStar } from "react-icons/ai";
import { BsCheckLg, BsShieldCheck } from "react-icons/bs";
import "../styles/SellerCard.css";

const SellerCard = () => {
  return (
    <div id="seller" className="bg-white mx-auto mb-5">
      <div className="mb-4">Seller Information & Performance</div>

      <div className="sellerBody row ">
        <h2 className="col-6 pt-1">Ikeoha</h2>

        <button
          type="submit"
          className="registerFacebook col btn rounded-0 border-0"
        >
          <a
            href="http://localhost:3000"
            className="text-white text-decoration-none "
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
        </button>

        <div className="sellerRatings col-12 d-flex flex-md-column flex-lg-row justify-content-between mt-3">
          <div className="d-flex">
            <span className="rounded-circle d-flex justify-content-center align-items-center">
              <AiFillStar />
            </span>
            <p className="ps-1 pt-2 ">Order performance</p>
          </div>

          <p className="pt-2 ">(4.6)</p>
        </div>

        <div className="sellerRatings col-12 d-flex flex-md-column flex-lg-row justify-content-between mt-2">
          <div className="d-flex">
            <span className="rounded-circle d-flex justify-content-center align-items-center">
              <BsCheckLg />
            </span>
            <p className="ps-1 pt-2 ">Quality Score</p>
          </div>

          <p className="pt-2 ">(5.0)</p>
        </div>

        <div className="sellerRatings col-12 d-flex flex-md-column flex-lg-row justify-content-between mt-2">
          <div className="d-flex">
            <span className="rounded-circle d-flex justify-content-center align-items-center">
              <small className="text-white rounded-circle text-center">P</small>
            </span>
            <p className="ps-1 pt-2 ">Total Product</p>
          </div>

          <p className="pt-2 ">206</p>
        </div>

        <div className="sellerRatings col-12 d-flex flex-md-column flex-lg-row justify-content-between mt-2">
          <div className="d-flex">
            <span className="rounded-circle d-flex justify-content-center align-items-center">
              <BsShieldCheck />
            </span>
            <p className="ps-1 pt-2 ">Order performance</p>
          </div>

          <p className="pt-2 ">(4.8)</p>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
