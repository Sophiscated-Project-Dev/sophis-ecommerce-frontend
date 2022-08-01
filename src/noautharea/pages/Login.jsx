import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/user/userActions";
// i julius added this to clear the state
import { clearState } from "../../features/user/userSlice";

import "../styles/Login.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";

// import { logInWithGoogle } from "./Firebase/Firebase";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.user);
  const [data, setData] = useState({ email: "", password: "" });

  //handle input fields
  const handleInputChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //validate email and password
    const EMAIL_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;

    if (EMAIL_REGEX.test(data.email) || data.email.trim().length < 4)
      return toast.error("email must be filled corectly");

    if (data.password.trim().length < 1)
      return toast.error("check the password field");

    dispatch(userLogin(data));
  };

  useEffect(() => {
    const userLogin = async () => {
      if (error) return toast.error("email/password incorrect");

      if (success) {
        dispatch(clearState());
        navigate("/");
        toast.success("logged in successfully");
      }

      if (loading) toast.info("logging in", { autoClose: 1000 });
    };

    userLogin();
  }, [navigate, loading, error, success]);

  return (
    <div className="login d-flex justify-content-center align-items-center py-2">
      <Form className="login-form bg-white py-3 px-5" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className="login-header pb-2">Log In</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="login-label">Email address*</Form.Label>
          <Form.Control
            type="email"
            id="email"
            onChange={handleInputChange}
            autoComplete="off"
            required
            value={data.email}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="login-label">Password*</Form.Label>
          <Form.Control
            type="password"
            id="password"
            onChange={handleInputChange}
            value={data.password}
            required
          />
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
          <button
            className="login-btn-google"
            // onClick={logInWithGoogle}
          >
            <AiFillGoogleCircle />
            Log in with Google
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
