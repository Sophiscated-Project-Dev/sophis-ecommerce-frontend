import { Link } from "react-router-dom";

import "../styles/AccessoryDetail.css";

import { AiFillStar } from "react-icons/ai";
import { HiHeart } from "react-icons/hi";
import Facebook from "../../assets/images/colouredIcons/facebook.png";
import Twitter from "../../assets/images/colouredIcons/twitter.png";
import Whatsapp from "../../assets/images/colouredIcons/whatsapp.png";

import AddToCart from "./AddToCart";

const AccessoryDetail = ({ product }) => {
  // const {
  //  name,
  //   averageRating,
  //   discount,
  //   description,
  //   colors,
  //   brand,
  //   category,
  //   inventory,
  //   price,
  //   reviews,
  //   size,
  //   images,
  //   tax,
  //   numberOfReviews,
  //   vendor,
  //   specification,
  // } = product;
  console.log(product);

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
              <div className="carousel-item active">
                {product?.images[0] && (
                  <img
                    src={product?.images[0]}
                    className="d-block w-100"
                    alt=""
                  />
                )}
              </div>
              <div className="carousel-item">
                {product?.images[1] && (
                  <img
                    src={product?.images[1]}
                    className="d-block w-100"
                    alt=""
                  />
                )}
              </div>
              <div className="carousel-item">
                {product?.images[2] && (
                  <img
                    src={product?.images[2]}
                    className="d-block w-100"
                    alt=""
                  />
                )}
              </div>
            </div>

            <h4 className="text-dark">Closer view</h4>
            {/* Button trigger modal  */}
            <button
              type="button"
              className="btn modalButton  position-relative"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              {product?.images[0] && (
                <img src={product?.images[0]} alt="item" />
              )}
            </button>

            <button
              type="button"
              className="btn modalButton  position-relative"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              {product?.images[1] && (
                <img src={product?.images[1]} alt="item" />
              )}
            </button>

            <button
              type="button"
              className="btn modalButton  position-relative"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              {product?.images[2] && (
                <img src={product?.images[2]} alt="item" />
              )}
            </button>

            <button
              type="button"
              className="btn modalButton  position-relative"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              {product?.images[3] && (
                <img src={product?.images[3]} alt="item" />
              )}
            </button>

            <div
              className="modal fade"
              id="exampleModal"
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
                    <img
                      className="img-fluid"
                      src={product?.images[0]}
                      alt="item"
                    />
                  </div>
                </div>
              </div>
            </div>

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
          {product?.colors.map((color) => {
            return (
              <button className="border-0 ">
                <img
                  className=""
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  aria-label="Slide 1"
                  src={product?.images[0]}
                  alt="item"
                />
                <p>{color}</p>
              </button>
            );
          })}

          {/* <button className="border-0 ">
            <img
              className="h-75"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              src={GreenHeadset}
              alt="item"
            />
            <p>Green</p>
          </button>
          <button className="border-0 ">
            <img
              className="h-75"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              src={VividHeadset}
              alt="item"
            />
            <p>Blue</p>
          </button> */}
        </div>
      </div>

      <div className="accessoryRight col-12 col-md-6 pt-4">
        <div className="accessoryRightHeader d-flex justify-content-between">
          <h3>{product?.name}</h3>

          <span>
            <HiHeart />
          </span>
        </div>

        <p className="accessoryRating">
          <AiFillStar /> <span>{product?.averageRating}</span> |{" "}
          {product?.numberOfReviews} Reviews
        </p>

        <p className="accessoryBrand">
          Brand: <span className="fw-bold">{product?.brand}</span> |{" "}
          <Link to="/" className="text-decoration-none">
            Oher products from Oraimo
          </Link>
        </p>

        <p className="accessoryDiscount d-inline-block me-3">
          ${product?.price}
        </p>

        <sup className="accessoryPrice ">
          <del>$1,800.00</del>
        </sup>

        <div className="accessorySizes d-flex justify-content-between">
          <span>Size:</span>

          {product?.size.map((item) => {
            return (
              <div>
                <input
                  className="form-check-input rounded-0 mt-0 me-2"
                  type="checkbox"
                  id="S"
                  value="S"
                />
                <label htmlFor="S"> {item}</label>
              </div>
            );
          })}
          {/* <div>
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
          </div> */}
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