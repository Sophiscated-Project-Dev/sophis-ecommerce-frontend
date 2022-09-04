import React, { useState } from "react";

import { logOut } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import LOGO from "../../assets/images/logo1.png";
import SOPHIS from "../../assets/images/SophisMart.png";
import LOCATE from "../../assets/images/Locate.png";

import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Col, Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import "../styles/Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { cartTotalQuanty } = useSelector((state) => state.cart);
  const { success } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showMain, setShowMain] = useState(false);

  //log out user
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div className="header" id="top">
      <Navbar expand="lg">
        <Container>
          <Col>
            <div className="navbar-brand" href="#home">
              <div className="navBar-logo">
                <div className="navBar-img-container d-flex">
                  <div className="navBar-logo1">
                    <Link
                      to="/"
                      onClick={() => {
                        setShowMain(false);
                      }}
                    >
                      <img src={LOGO} alt="logo1" />
                    </Link>
                  </div>
                  <div className="navBar-sophis">
                    <Link
                      to="/"
                      onClick={() => {
                        setShowMain(false);
                      }}
                    >
                      <img src={SOPHIS} alt="SOPHIS LOGO" />
                    </Link>
                  </div>
                  <div className="navBar-locate">
                    <img src={LOCATE} alt="" />
                    <p>Enugu</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => {
              setShowMain((prev) => !prev);
            }}
          />
          <div
            className="collapse1 navbar-collapse1"
            // id="basic-navbar-nav"
            id={showMain ? "showNav" : ""}
          >
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
                <Link to={"/userProfile"} className="navBar-user-icon">
                  <FaUser className="user-icon" />
                  <p>Account</p>
                </Link>
                <div className="nav-link">
                  <div className="navBar-signIn">
                    {!success ? (
                      <>
                        <p
                          onClick={() => {
                            setShowMain(false);
                          }}
                        >
                          <Link to="login">Sign In</Link>
                        </p>
                        <p>Or</p>
                        <p>
                          <Link
                            to="register"
                            onClick={() => {
                              setShowMain(false);
                            }}
                          >
                            Register
                          </Link>
                        </p>
                      </>
                    ) : (
                      <p>
                        <Link to="/login" onClick={handleLogOut}>
                          Log Out
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
                <Nav.Link href="#link">
                  <div className="navbar-wishlis-icon">
                    <FaHeart className="heart-icon" />
                    <p>Wishlist</p>
                  </div>
                </Nav.Link>
                <div className="nav-link" href="#link">
                  <div className="navBar-cart-icon">
                    <Link
                      to="cart"
                      onClick={() => {
                        setShowMain(false);
                      }}
                    >
                      <FaShoppingCart className="cart" />
                      <span className="cartCount">{cartTotalQuanty}</span>
                      <p>Cart</p>
                    </Link>
                  </div>
                </div>
              </Nav>
            </Col>
          </div>
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
    </div>
  );
};

export default Header;
