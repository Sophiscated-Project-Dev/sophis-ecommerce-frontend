import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { HiHeart } from "react-icons/hi";
import "../styles/AccessoryDetail.css";
import Headset from "../../assets/images/dummyImages/headset.png";
import GreenHeadset from "../../assets/images/dummyImages/greenHeadset.png";
import VividHeadset from "../../assets/images/dummyImages/vividHeadset.png";

const AccessoryDetail = () => {
  return (
    <section className="accessory row bg-white">
      <div className="accessoryLeft col-12 col-md-6">
        <h2>
          <span>Home/Phone & Accessories</span>/Earphones & Headphones
        </h2>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Headset} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={GreenHeadset} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={VividHeadset} className="d-block w-100" alt="..." />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <img
            className="h-75"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            src={GreenHeadset}
            alt=""
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
      </div>

      <div className="accessoryRight col-12 col-md-6">
        <div className="accessoryRightHeader d-flex justify-content-between">
          <h3>
            P9 Wireless Headphones Hifi Stereo With Mic For iOs And Android
          </h3>

          <span>
            <HiHeart />
          </span>
        </div>

        <p className="accessoryRating">
          <AiFillStar /> <span>5.0</span> | 16 Reviews
        </p>

        <p className="accessoryBrand">
          Brand: <span className="fw-bold">Oraimo</span> |{" "}
          <Link to="/" className="text-decoration-none">
            Oher products from Oraimo
          </Link>
        </p>

        <p className="accessoryDiscount d-inline-block me-3">$1,620.00</p>

        <sup className="accessoryPrice ">
          <del>$1,800.00</del>
        </sup>

        <div className="accessorySizes d-flex justify-content-between w-md-75">
          <span>Size:</span>

          <div>
            <input
              className="form-check-input rounded-0 mt-0 me-2"
              type="checkbox"
              id="S"
              value="S"
            />
            <label htmlFor="S"> S</label>
          </div>

          <div>
            <input
              className="form-check-input rounded-0 mt-0 me-2"
              type="checkbox"
              id="M"
              value="M"
            />
            <label htmlFor="M"> M</label>
          </div>

          <div>
            <input
              className="form-check-input rounded-0 mt-0 me-2"
              type="checkbox"
              id="L"
              value="L"
            />
            <label htmlFor="L"> L</label>
          </div>

          <div>
            <input
              className="form-check-input rounded-0 mt-0 me-2"
              type="checkbox"
              id="XL"
              value="XL"
            />
            <label htmlFor="XL"> XL</label>
          </div>
        </div>

        <div className="accessoryQuantity position-responsive">
          <p className="mt-3">Quantity:</p>

          <button className="btn me-4">-</button>
          <span >2</span>
          <button className="btn ms-4">
            +
          </button>

        </div>
      </div>
    </section>
  );
};

export default AccessoryDetail;
