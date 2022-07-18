import React from "react";
import "../../styles/TopVendors.css";
import data from "./Data";
import Structure from "./TopVendorStructure";
import SectionHeader from "../SectionHeader";

const TopVendors = () => {
  const topVendorDetails = data.map((structData) => (
    <Structure structData={structData} key={structData.name} />
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
