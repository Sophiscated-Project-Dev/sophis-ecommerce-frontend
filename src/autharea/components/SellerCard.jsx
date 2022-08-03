import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVendors } from "../../features/topVendors/vendorActions";

import { AiFillStar } from "react-icons/ai";
import { BsCheckLg, BsShieldCheck } from "react-icons/bs";
import "../styles/SellerCard.css";
import Spinner from "../../utils/spinner/Spinner";

const SellerCard = ({ product }) => {
  const { vendor: vendorId } = product;

  const dispatch = useDispatch();
  const { vendors, loading, error } = useSelector((state) => state.vendors);

  useEffect(() => {
    dispatch(fetchVendors());
  }, [dispatch]);

  //get all sellers
  const sellers = vendors?.map((vendor) => vendor);
  
  //get single seller
  const vendor = sellers?.filter((seller) => seller.vendor.id === vendorId); 
  //const {firstName, email, averageRating} = vendor[0]?.vendor
  
  return (
    <div id="seller" className="bg-white mx-auto mb-5">
      <div className="mb-4">Seller Information & Performance</div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <h5>{error}</h5>
      ) : (
        <div className="sellerBody row ">
          <h2 className="col-6 pt-1 mt-0">{vendor[0]?.vendor.firstName}</h2>

          <button
            type="submit"
            className="registerFacebook col btn rounded-0 border-0"
          >
            <a
              href={`mailto: ${vendor[0]?.vendor.email} `}
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
                <small className="text-white rounded-circle text-center">
                  P
                </small>
              </span>
              <p className="ps-1 pt-2 ">Total Product</p>
            </div>

            <p className="pt-2 ">{vendor[0]?.productCount}</p>
          </div>

          <div className="sellerRatings col-12 d-flex flex-md-column flex-lg-row justify-content-between mt-2">
            <div className="d-flex">
              <span className="rounded-circle d-flex justify-content-center align-items-center">
                <BsShieldCheck />
              </span>
              <p className="ps-1 pt-2 ">Customer Review</p>
            </div>

            <p className="pt-2 ">{(vendor[0]?.vendor?.averageRating) }</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerCard;
