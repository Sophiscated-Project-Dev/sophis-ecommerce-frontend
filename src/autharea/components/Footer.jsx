import React from "react";
import { Link } from "react-router-dom";

/* Icons */
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import "../styles/Footer.css";

/* Images */
import PlayStore from "../../assets/images/playstore.png";
import IStore from "../../assets/images/istore.png";
import DHL from "../../assets/images/footerDHL.png";
import Express from "../../assets/images/footerExpress.png";
import Mail from '../../assets/images/footerMail.png'
import MasterCard from "../../assets/images/footerMasterCard.png";
import VISA from "../../assets/images/footerVisa.png";

const Footer = () => {
  return (
    <footer className="container-fluid">
      {/* Subscribe */}
      <div className="row" id="subscribe">
        <h3 className="footerHeader col-12 col-md text-white mb-5">
          Sophis{' '}<span>Mart</span>
        </h3>

        <div className="col-12 col-md">
          <p className="">Deliver the latest Product trends to your email </p>
          <div className="input-group mb-5">
            <span className="input-group-text rounded-0 bg-white">
              <img src={Mail} alt="email sub icon" />
            </span>
            <input
              type="text"
              className="form-control rounded-0 border-start-0"
              placeholder="your email address"
            />
            <span className="input-group-text text-white border-0 rounded-0">
              subscribe
            </span>
          </div>
        </div>

        <div className="col-12 col-md">
          <p>Download Sophis Mart</p>

          <a href="http://localhost:3000" target="_blank" rel="noreferrer">
            <img
              src={PlayStore}
              className="img-fluid"
              alt="Google Play Store"
            />
          </a>

          <a href="http://localhost:3000" target="_blank" rel="noreferrer">
            <img src={IStore} className="img-fluid" alt="Apple Store" />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="row mt-5" id="quickLinks">
        <div className="col-12 col-sm-6 col-lg">
          <h2>Buy</h2>

          <Link to="/" className="text-decoration-none">
            <p>Registration</p>
          </Link>

          <Link to="/" className="text-decoration-none">
            <p>Stores</p>
          </Link>

          <Link to="/" className="text-decoration-none">
            <p>Guide</p>
          </Link>

          <Link to="/" className="text-decoration-none">
            <p>Sophis Mart Money-Back Policy</p>
          </Link>
        </div>

        <div className="col-12 col-sm-6 col-lg">
          <h2>Sell</h2>

          <Link to="/" className="text-decoration-none">
            <p>Learn how to sell</p>
          </Link>

          <Link to="/" className="text-decoration-none">
            <p>Start Selling</p>
          </Link>

          <Link to="/" className="text-decoration-none">
            <p>Affiliates</p>
          </Link>
        </div>

        <div className="col-12 col-sm-6 col-lg mt-md-4 mt-lg-0">
          <h2>About Sophis Mart</h2>

          <Link to="/" className="text-decoration-none">
            <p>Company Info</p>
          </Link>

          <Link to="/" className="text-decoration-none">
            <p>Investors</p>
          </Link>

          <Link to="/" className="text-decoration-none">
            <p>News</p>
          </Link>

          <Link to="/" className="text-decoration-none">
            <p>Advertise with Us</p>
          </Link>

          <Link to="/" className="text-decoration-none">
            <p>Policies</p>
          </Link>
        </div>

        <div className="col-12 col-sm-6 col-lg mt-md-4 mt-lg-0">
          <h2>Help & FAQs</h2>

          <Link to="/" className="text-decoration-none">
            <p>Contact Us</p>
          </Link>

          <Link to="/" className="text-decoration-none">
            <p>Resolution Center</p>
          </Link>

          <Link to="/" className="text-decoration-none">
            <p>News</p>
          </Link>
        </div>
      </div>

      {/* Socials */}
      <div className=" row mt-5" id="socials">
        <div className="col-12 col-sm mb-5">
          <h2>Join Us:</h2>
          <div className="d-flex justify-content-between">
            <a href="http:localhost:3000" target="_blank" rel="noreferrer">
              <AiFillInstagram className="socialIcons" />
            </a>
            <a href="http:localhost:3000" target="_blank" rel="noreferrer">
              <IoLogoWhatsapp className="socialIcons" />
            </a>{" "}
            <a href="http:localhost:3000" target="_blank" rel="noreferrer">
              <BsTwitter className="socialIcons" />
            </a>
            <a href="http:localhost:3000" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="socialIcons" />
            </a>
            <a href="http:localhost:3000" target="_blank" rel="noreferrer">
              <BsFacebook className="socialIcons" />
            </a>
          </div>
        </div>

        <div className="col-12 col-sm  pr-md-5">
          <h2 className="">Payment Method & Delivery Partner</h2>

          <div className="d-flex justify-content-between">
            <img src={MasterCard} alt="mastercard logo" />
            <img src={VISA} alt="visa logo" />
            <img src={DHL} alt="DHL logo" />
            <img src={Express} alt="Express Logo" />
          </div>
        </div>
      </div>

      <p className="text-center mt-3 mt-lg-0">
        Copyright &copy;{" "}
        <Link to="/" className="text-decoration-none">
          <span>SophisMart.com</span>
        </Link>
        . All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
