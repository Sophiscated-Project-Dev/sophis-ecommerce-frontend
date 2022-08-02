import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../styles/TopVendors.css";
import Structure from "./TopVendorStructure";
import SectionHeader from "../SectionHeader";
import { fetchVendors } from "../../../features/topVendors/vendorActions";
import Spinner from "../../../utils/spinner/Spinner";

const TopVendors = () => {
  const { vendors, loading, error } = useSelector((state) => state.vendors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVendors());
  }, [dispatch]);

  const topVendorDetails = loading ? (
    <Spinner />
  ) : error ? (
    <h5>{error}</h5>
  ) : (
    vendors?.map((vendor, index) => (
      <Structure
        vendor={vendor.vendor}
        rank={index}
        numOfProd={vendor.productCount}
        key={vendor.vendor._id}
      />
    ))
  );

  return (
    <div className="container">
      <div className="vendor-detail position-relative">
        <SectionHeader title={"Top Vendors"} />
        <div className="row vendor-tiles"> {topVendorDetails} </div>
      </div>
    </div>
  );
};

export default TopVendors;
