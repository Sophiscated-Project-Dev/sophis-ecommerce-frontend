import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../styles/TopVendors.css";
import Structure from "./TopVendorStructure";
import SectionHeader from "../SectionHeader";
import { fetchVendors } from "../../../features/topVendors/vendorActions";

const TopVendors = () => {
  const { vendors, loading, error } = useSelector((state) => state.vendors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVendors());
  }, [dispatch]);

  const topVendorDetails = loading ? <h5>Loading...</h5> : error ? <h5>{error}</h5> : vendors?.map((vendor) => (
    <Structure vendor={vendor.vendor} key={vendor.vendor._id} />
  ));

  return (
    <div className="container">
      <div className="vendor-detail">
        <SectionHeader title={"Top Vendors"} />
        <div className="row vendor-tiles"> {topVendorDetails} </div>
      </div>
    </div>
  );
};

export default TopVendors;

