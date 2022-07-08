import React from "react";
import { Button, Form } from "react-bootstrap";
import "../styles/Login.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";

const Login = () => {
  return (
    <div className="login d-flex justify-content-center align-items-center py-2">
      <Form className="login-form bg-white py-3 px-5">
        <Form.Group>
          <Form.Label className="login-header pb-2">Log In</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="login-label">Email address*</Form.Label>
          <Form.Control type="email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="login-label">Password*</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex justify-content-between"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            className="login-remember-me"
            type="checkbox"
            label="remember me"
          />
          <span className="login-forgot-password">Forgot Password</span>
        </Form.Group>
        <button className="login-btn mb-2">Submit</button>
        <p className="hr-rule">or</p>
        <Form.Group className="">
          <button className="login-btn-primary mb-3">
            <FaFacebook />
            facebook
          </button>
          <button className="login-btn-google">
            <AiFillGoogleCircle />
            google
          </button>
        </Form.Group>

        <p className="login-terms-p my-3">
          By creating an Account, you agree to{" "}
          <a href="#">Our Terms &#38; Conditions, Our Private Policy</a> and{" "}
          <a href="#">Money-Back Policy</a>
        </p>

        <hr></hr>
      </Form>
    </div>
  );
};

export default Login;
