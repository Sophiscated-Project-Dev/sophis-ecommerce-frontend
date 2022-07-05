import React from "react";
import { Button, Card } from "react-bootstrap";

import { FaRegHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

export const LaptopComs = ({
  img,
  description,
  name,
  iconLove,
  newPrice,
  oldPrice,
  vendor,
  starCount,
  reviewCount,
}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="laptop-card-item m-2">
        <Card.Img className="laptop-card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="laptop-card-head">{name}</Card.Title>
          <Card.Text className="d-flex justify-content-between">
            <span className="laptop-cart-text">{description}</span>
            <FaRegHeart className="card-icon-love" />
          </Card.Text>
          <div className="laptop-card-price-cont">
            <p className="laptop-card-old-price">&#36;{oldPrice}</p>
            <p className="laptop-card-new-price">&#36;{newPrice}</p>
          </div>
          <p className="laptop-card-vendor1">
            vendor: <span className="laptop-card-vendor2 p-2">{vendor}</span>
          </p>
          <div className="laptop-card-star-cont">
            <div className="">
              <AiFillStar className="laptop-card-star" />
              <span className="laptop-card-star-count">{starCount}</span>
            </div>
            <div className="d-flex py-1">
              <div className="laptop-card-review-count">
                <p className=""> {reviewCount}</p>
                <p>Reviews</p>
              </div>
            </div>
          </div>
          <Button className="laptop-card-btn" variant="primary">
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
