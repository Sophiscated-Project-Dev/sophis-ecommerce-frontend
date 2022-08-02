import { Link } from "react-router-dom";

import "../styles/AccessoryDetail.css";

import { AiFillStar } from "react-icons/ai";
import { HiHeart } from "react-icons/hi";
import Facebook from "../../assets/images/colouredIcons/facebook.png";
import Twitter from "../../assets/images/colouredIcons/twitter.png";
import Whatsapp from "../../assets/images/colouredIcons/whatsapp.png";

import AddToCart from "./AddToCart";

const AccessoryDetail = ({ product }) => {
  const {
    name,
    category,
    images,
    colors,
    averageRating,
    numberOfReviews,
    brand,
    discount,
    price,
    size,
  } = product;
  let randomId = Math.floor(Math.random() * 1000000 + 1);
  return (
    <section className="accessory row bg-white pb-4">
      <div className="accessoryLeft col-12 col-md-6 position-relative">
        <div className="accessoryLeftUpper">
          <div
            id="carouselExampleIndicators"
            className="carousel slide "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {images?.map((image, index) => (
                <div
                  key={index + randomId}
                  className={
                    index === 0 ? "carousel-item active" : "carousel-item"
                  }
                >
                  <img src={image} className="d-block w-100" alt={name} />
                </div>
              ))}
            </div>

            <h4 className="text-dark">Closer view</h4>

            {/* Button trigger modal  */}
            {images?.map((image, index) => (
              <button
                type="button"
                key={index + randomId}
                className="btn modalButton  position-relative"
                data-bs-toggle="modal"
                data-bs-target={`#${category}_${index}`}
              >
                <img src={image} alt={name} />
              </button>
            ))}

            {images?.map((image, index) => (
              <div
                key={index + randomId}
                className="modal fade"
                id={`${category}_${index}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img className="img-fluid" src={image} alt="item" />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel control buttons */}
            <button
              className="carousel-control-prev ccp"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="fw-bolder position-absolute" aria-hidden="true">
                &#9001;
              </span>
            </button>
            <button
              className="carousel-control-next ccn"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="fw-bolder position-absolute" aria-hidden="true">
                &#9002;
              </span>
            </button>
          </div>
        </div>

        <h4 className="text-dark ms-4">Color:</h4>
        <div className="carousel-indicators position-absolute d-flex mx-auto justify-content-between">
          {images?.map((image, index) => (
            <button className="border-0 " key={index + randomId}>
              <img
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                aria-label="Slide 1"
                src={image}
                alt={name}
              />
              <p>{colors[index] && colors[index]}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="accessoryRight col-12 col-md-6 pt-4">
        <div className="accessoryRightHeader d-flex justify-content-between">
          <h3>{name}</h3>

          <span>
            <HiHeart />
          </span>
        </div>

        <p className="accessoryRating">
          <AiFillStar /> <span>{averageRating}.0</span> | {numberOfReviews}{" "}
          Reviews
        </p>

        <p className="accessoryBrand">
          Brand: <span className="fw-bold">{brand}</span> |{" "}
          <Link to="/" className="text-decoration-none">
            Other products from {brand}
          </Link>
        </p>

        {discount === 0 && (
          <p className="accessoryDiscount d-inline-block me-3">${price}</p>
        )}
        {discount !== 0 && (
          <>
            <p className="accessoryDiscount d-inline-block me-3">${discount}</p>{" "}
            <sup className="accessoryPrice ">
              <del>${price}</del>
            </sup>
          </>
        )}

        <div className="accessorySizes d-flex justify-content-between">
          <span>Size:</span>
          {size?.map((item, index) => (
            <div key={index + randomId}>
              <input
                className="form-check-input rounded-0 mt-0 me-2"
                type="checkbox"
                id={item.toUpperCase()}
                value={item.toUpperCase()}
              />
              <label htmlFor={item.toUpperCase()}> {item.toUpperCase()}</label>
            </div>
          ))}
        </div>

        <div className="accessoryQuantity">
          <p className="mt-3">Quantity:</p>

          <button className="btn me-4">-</button>
          <span>2</span>
          <button className="btn ms-4">+</button>
        </div>

        <AddToCart />

        <div className="accessoryShare">
          <p className="mt-3">Share:</p>

          <div
            className=" d-flex justify-content-between"
            onClick={() => navigator.clipboard.writeText(window.location.href)}
          >
            <a
              href="http://localhost:3000"
              alt="whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Whatsapp} alt="whatsapp" />
            </a>

            <a href="http://localhost:3000" target="_blank" rel="noreferrer">
              <img src={Facebook} alt="facebook" />
            </a>

            <a href="http://localhost:3000" target="_blank" rel="noreferrer">
              <img src={Twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessoryDetail;
