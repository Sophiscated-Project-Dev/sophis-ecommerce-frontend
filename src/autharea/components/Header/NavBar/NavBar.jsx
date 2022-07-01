import React, { useState } from "react";
import LOGO from "../../../../assets/images/logo1.png";
import SOPHIS from "../../../../assets/images/SophisMart.png";
import LOCATE from "../../../../assets/images/Locate.png";
import "./NavBar.css";

import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Col, Container, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";

export const NavBar = () => {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Col>
            <Navbar.Brand href="#home">
              <div className="navBar-logo">
                <div className="navBar-img-container d-flex">
                  <div className="navBar-logo1">
                    <img src={LOGO} alt="logo1" />
                  </div>
                  <div className="navBar-sophis">
                    <img src={SOPHIS} alt="SOPHIS LOGO" />
                  </div>
                  <div className="navBar-locate">
                    <img src={LOCATE} alt="" />
                    <p>Enugu</p>
                  </div>
                </div>
              </div>
            </Navbar.Brand>
          </Col>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setShowMain((prev) => !prev)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Col xs={12} sm={12} md={7}>
              <Nav className="navBar-search">
                <div className="navBar-search-content">
                  <div className="navBar-search-icon">
                    <FaSearch className="search-icon" />
                  </div>
                  <div className="navBar-search-input">
                    <input
                      type="text"
                      placeholder="search something"
                      className="search-input"
                    />
                  </div>
                  <div className="navBar-search-btn">
                    <button className="search-btn">Search</button>
                  </div>
                </div>
              </Nav>
            </Col>
            <Col xs={10} sm={11} md={5}>
              <Nav className="me-auto pb-3 top-bar">
                <div className="navBar-user-icon">
                  <FaUser className="user-icon" />
                  <p>Account</p>
                </div>
                <NavDropdown title="" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">
                  <div className="navBar-signIn">
                    <p>Hi Sign In </p>
                    <p>Or</p>
                    <p>Register</p>
                  </div>
                </Nav.Link>
                <Nav.Link href="#link">
                  <div className="navbar-wishlis-icon">
                    <FaHeart className="heart-icon" />
                    <p>Wishlist</p>
                  </div>
                </Nav.Link>
                <Nav.Link href="#link">
                  <div className="navBar-cart-icon">
                    <FaShoppingCart className="cart" />
                    <p>Cart</p>
                  </div>
                </Nav.Link>
              </Nav>
            </Col>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*  */}

      <div id={showMain ? "showmain" : ""} className="header-main">
        <Nav className="container d-flex justify-content-between">
          <Nav.Item>
            {/* <Nav.Link className="new-nav-Link" href="/home"> */}
            <NavDropdown
              title={
                <span style={{ color: "white" }} className="my-auto">
                  All Categories
                </span>
              }
              // className="dropdown"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Fashion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Phones &#38; Tablet
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Computing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Baby Products &#38; Toys
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Home &#38; Office
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Others</NavDropdown.Item>
            </NavDropdown>
            {/* </Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="new-nav-Link" eventKey="link-1">
              Fashion
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="new-nav-Link" eventKey="link-2">
              Phones &#38; Tablet
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="new-nav-Link" eventKey="link-2">
              Computing
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="new-nav-Link" eventKey="link-2">
              Baby Products &#38; Toys
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="new-nav-Link" eventKey="link-2">
              Home &#38; Office
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {/*  */}
    </>
  );
};

//
//
//
//
//
{
  /* 
      <Container>
        <Row>
          <div className="navBar-content">

              <div className="navBar-logo">
                <div className="navBar-img-container">
                  <div className="navBar-logo1">
                    <img src={LOGO} alt="logo1" />
                  </div>
                  <div className="navBar-sophis">
                    <img src={SOPHIS} alt="SOPHIS LOGO" />
                  </div>
                  <div className="navBar-locate">
                    <img src={LOCATE} alt="" />
                    <p>Enugu</p>
                  </div>
                </div>
              </div>
  
            <Col>
              <div className="navBar-search">
                <div className="navBar-search-content">
                  <div className="navBar-search-icon">
                    <FaSearch className="search-icon" />
                  </div>
                  <div className="navBar-search-input">
                    <input
                      type="text"
                      placeholder="search something"
                      className="search-input"
                    />
                  </div>
                  <div className="navBar-search-btn">
                    <button className="search-btn">Search</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="navBar-account-icons">
                <div className="navBar-user-icon">
                  <FaUser className="user-icon" />
                  <p>Account</p>
                </div>
                <div className="navBar-signIn">
                  <p>Hi Sign In </p>
                  <p>Or</p>
                  <p>Register</p>
                </div>
                <div className="navbar-wishlis-icon">
                  <FaHeart className="heart-icon" />
                  <p>Wishlist</p>
                </div>
                <div className="navBar-cart-icon">
                  <FaShoppingCart className="cart" />
                  <p>Cart</p>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div> */
}

{
  /* btn toggle */
}

//  <button
//  aria-controls="basic-navbar-nav"
//  type="button"
//  aria-label="Toggle navigation"
//  class="navbar-toggler"
// >
//  <span class="navbar-toggler-icon"></span>
// </button>

{
  /* btn toggle */
}
