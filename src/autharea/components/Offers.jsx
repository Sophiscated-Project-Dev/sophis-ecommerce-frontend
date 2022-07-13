import React from "react";
import "../styles/Offers.css";
import Guarantee from "../../assets/images/Vector-1.png";
import Num from "../../assets/images/Vector-2.png";
import Certified from "../../assets/images/Vector-3.png";
import Man from "../../assets/images/Vector-4.png";
import Bus from "../../assets/images/Vector-5.png";
import Arrow from "../../assets/images/Vector-7.png";

const Offers = () => {
  return (
    <div className="Offers-">
      <div className="line"></div>
      <div className="Offers">
        <div className="Offers-divs">
          <img src={Guarantee} alt="" className="guarantee" />
          <p>
            We offer a 7-day money back Policy for any Product below advertised
            specification{" "}
          </p>
        </div>
        <div className="Offers-divs">
          <img src={Num} alt="" />
          <p>We offer a 24/7 Customer Service</p>
        </div>
        <div className="Offers-divs">
          <div>
            <img src={Certified} alt="" className="Cert" />
          </div>
          <p>Sophis Mart have a certified secure payment option</p>
        </div>
        <div className="Offers-divs">
          <img src={Man} alt="" />
          <p>We give you the fastest Door-to-door Services</p>
        </div>
        <div className="Offers-divs">
          <img src={Bus} alt="" />
          <p>Free shipping services for intra-state delivery</p>
        </div>
      </div>
      <a href="#top">
        <div className="to-top">
          Back to top{" "}
          <span>
            <img src={Arrow} alt="" />
          </span>
        </div>
      </a>
    </div>
  );
};

export default Offers;
