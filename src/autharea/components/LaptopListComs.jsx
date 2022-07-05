import React from "react";
import { Dropdown } from "react-bootstrap";
import { LaptopComs } from "./LaptopComs";
import "../styles/LaptopComs.css";

import { FaSortAmountDown, FaFilter } from "react-icons/fa";
// import { AiFillStar } from "react-icons/ai";

import Laptop1 from "../../assets/laptop/laptop1.png";
import Laptop2 from "../../assets/laptop/laptop2.png";
import Laptop3 from "../../assets/laptop/laptop3.png";
import Laptop4 from "../../assets/laptop/laptop4.png";
import Laptop5 from "../../assets/laptop/laptop5.png";
import Laptop6 from "../../assets/laptop/laptop6.png";
import Bag1 from "../../assets/laptop/bag1.png";
import Bag2 from "../../assets/laptop/bag2.png";

const laptopLists = [
  {
    id: 1,
    img: Laptop1,
    name: "Name Of Laptop",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    newPrice: 450,
    oldPrice: 500,
    vendor: "james",
    starCount: 3,
    reviewCount: 12,
  },
  {
    id: 2,
    img: Laptop2,
    name: "Name Of Laptop 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    newPrice: 450,
    oldPrice: 500,
    vendor: "james",
    starCount: 8,
    reviewCount: 66,
  },
  {
    id: 3,
    img: Laptop3,
    name: "Name Of Laptop 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    newPrice: 450,
    oldPrice: 500,
    vendor: "james",
    starCount: 7,
    reviewCount: 10,
  },
  {
    id: 4,
    img: Laptop4,
    name: "Name Of Laptop 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    newPrice: 450,
    oldPrice: 500,
    vendor: "james",
    starCount: 9,
    reviewCount: 120,
  },
  {
    id: 5,
    img: Laptop5,
    name: "Name Of Laptop 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    newPrice: 450,
    oldPrice: 500,
    vendor: "james",
    starCount: 1,
    reviewCount: 0,
  },
  {
    id: 6,
    img: Laptop6,
    name: "Name Of Laptop 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    newPrice: 450,
    oldPrice: 500,
    vendor: "james",
    starCount: 13,
    reviewCount: 102,
  },
  {
    id: 7,
    img: Bag1,
    name: "Name Of Bag",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    newPrice: 450,
    oldPrice: 500,
    vendor: "james",
    starCount: 3,
    reviewCount: 22,
  },
  {
    id: 8,
    img: Bag2,
    name: "Name Of Bag",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    newPrice: 450,
    oldPrice: 500,
    vendor: "james",
    starCount: 10,
    reviewCount: 2,
  },
];

export const LaptopListComs = () => {
  return (
    <div className="Laptop-comps p-5">
      <div className="laptop-comps-top">
        <h4>Laptops</h4>
        <div className="laptop-comps-other">
          <div className="filter-laptops">
            <FaFilter className="fiter-latop-icon" />
            <Dropdown className="filter-laptop-dropdown">
              <Dropdown.Toggle
                className="filer-laptop-toggle"
                id="dropdown-basic"
              >
                filter
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="sort-laptops">
            <FaSortAmountDown className="sort-laptops-icon" />
            <Dropdown className="sort-laptop-dropdown">
              <Dropdown.Toggle
                className="sort-laptop-toggle"
                id="dropdown-basic"
              >
                Sort By
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="laptop-card d-flex justify-content-center align-items-center py-5 bg-white">
        <div className="laptop-card-row d-flex">
          {laptopLists.map((item, index) => {
            return <LaptopComs {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};
