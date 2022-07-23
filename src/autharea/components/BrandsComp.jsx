import React from "react";
import "../styles/BrandsComp.css";
import { BsArrowRight } from "react-icons/bs";

import APPLE from "../../assets/brand-img/apple.png";
import CANON from "../../assets/brand-img/canon.png";
import CHANEL from "../../assets/brand-img/chanel.png";
import FIRMAN from "../../assets/brand-img/firman.png";
import GUCCI from "../../assets/brand-img/gucci.png";
import HP from "../../assets/brand-img/hp.png";
import LV from "../../assets/brand-img/lv.png";
import NIKE from "../../assets/brand-img/nike.png";
import NIVEA from "../../assets/brand-img/Nivea.png";
import TIMBERLAND from "../../assets/brand-img/timberland.png";
import UNILEVER from "../../assets/brand-img/unilever.png";
import OTHER from "../../assets/brand-img/others.png";

const brand = [
  {
    name: "APPLE",
    img: APPLE,
  },
  {
    name: "CANON",
    img: CANON,
  },
  {
    name: "CHANEL",
    img: CHANEL,
  },
  {
    name: "FIRMAN",
    img: FIRMAN,
  },
  {
    name: "GUCCI",
    img: GUCCI,
  },
  {
    name: "HP",
    img: HP,
  },
  {
    name: "Louis Vuitton",
    img: LV,
  },
  {
    name: "NIKE",
    img: NIKE,
  },
  {
    name: "NIVEA",
    img: NIVEA,
  },
  {
    name: "TIMBER LAND",
    img: TIMBERLAND,
  },
  {
    name: "UNILEVER",
    img: UNILEVER,
  },
  {
    name: "OTHER",
    img: OTHER,
  },
];

const BrandsComp = () => {
  return (
    <div className="container">
      <div className="brand_section">
        <div className="brand-sec_head">
          <h3>Brands</h3>

          <div className="next-pointer">
            <span style={{ paddingRight: "1rem" }}>see all items</span>
            <BsArrowRight className="" />
          </div>
        </div>
        <div className="row brand-sec_body">
          {brand?.map((item, index) => {
            const { img, name } = item;
            return (
              <div className="col brand-sec_item" key={index}>
                <div
                  style={{
                    // background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
                    background: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="brand-sec_background"
                >
                  <h3>{name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandsComp;
