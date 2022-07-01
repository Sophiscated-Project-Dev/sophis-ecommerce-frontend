import React from "react";
import { NavBar } from "./NavBar/NavBar";

import { FaAngleDown } from "react-icons/fa";
import "./Header.css";
import { Nav, NavDropdown } from "react-bootstrap";

export const Header = () => {
  return (
    <div className="header">
      <NavBar />
    </div>
  );
};

{
  /* <div className="header-main">
        <ul className="header-content">
          <li className="header-list">
            All Category <FaAngleDown className="header-list-icon" />
          </li>
          <li className="header-list">Fashion</li>
          <li className="header-list">Phones &#38; tablet</li>
          <li className="header-list">Computing</li>
          <li className="header-list">Baby Products &#38; Toys</li>
          <li className="header-list">Home &#38; Office</li>
          <li className="header-list">Others</li>
        </ul>
      </div> */
}

// {/*  */}

// <div className="header-main">
// <Nav className="container d-flex justify-content-between">
//   <Nav.Item>
//     {/* <Nav.Link className="new-nav-Link" href="/home"> */}
//     <NavDropdown
//       title={
//         <span style={{ color: "white" }} className="my-auto">
//           All Categories
//         </span>
//       }
//       // className="dropdown"
//       id="basic-nav-dropdown"
//     >
//       <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//       <NavDropdown.Item href="#action/3.2">
//         Another action
//       </NavDropdown.Item>
//     </NavDropdown>
//     {/* </Nav.Link> */}
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link className="new-nav-Link" eventKey="link-1">
//       Fashion
//     </Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link className="new-nav-Link" eventKey="link-2">
//       Phones &#38; Tablet
//     </Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link className="new-nav-Link" eventKey="link-2">
//       Computing
//     </Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link className="new-nav-Link" eventKey="link-2">
//       Baby Products &#38; Toys
//     </Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link className="new-nav-Link" eventKey="link-2">
//       Home &#38; Office
//     </Nav.Link>
//   </Nav.Item>

//   <Nav.Item>
//     <Nav.Link className="new-nav-Link" eventKey="link-2">
//       Others
//     </Nav.Link>
//   </Nav.Item>
// </Nav>
// </div>

// {/*  */}
