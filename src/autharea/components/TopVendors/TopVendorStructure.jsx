import React from "react";
import star from "../../../assets/top_vendors/star.png";

const Structure = ({ structData }) => {
  const { rank, image, name, numOfProd, rating, reviewNumber } = structData;
  return (
    <div className="col vendor-tiletag">
      <div>
        <div className="vendor-card">
          <div className="rank">{rank}</div>
          <div>
            <img src={image} alt="" className="vendor-img" />
          </div>
          <div className="vendor-info">
            <strong>
              <p className="vendor-name">{name} </p>
            </strong>
            <p className="vendor-NOP"> {numOfProd} products</p>
            <div className="vendor-stats">
              <img src={star} alt="star" />
              <strong>{rating} </strong> <span className="ssp">|</span>
              <span> {reviewNumber} Reviews </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
