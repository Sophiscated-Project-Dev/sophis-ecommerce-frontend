import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../features/user/userActions";
import { clearState } from "../../features/user/userSlice";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import "../styles/Register.css";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success, errorMessage } = useSelector(
    (state) => state.user
  );
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  //handle input fields
  const handleInputChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //Regex: email
    const EMAIL_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
    // number
    if (data.phoneNumber.trim().length < 1)
      return toast.error("check your phone number");
    if (data.firstName.trim().length < 1)
      return toast.error("check your first name field");
    if (data.lastName.trim().length < 1)
      return toast.error("check your last name field");
    // validate email
    if (EMAIL_REGEX.test(data.email) || data.email.trim().length < 4)
      return toast.error("email must be filled corectly");
    // validate password
    if (data.password.trim().length < 1)
      return toast.error("check the password field");
    // validate confirmPassword
    if (
      data.confirmPassword !== data.password ||
      data.confirmPassword.trim().length < 1
    )
      return toast.error("Comfirm password should match password");
    dispatch(userRegister(data));
  };

  useEffect(() => {
    if (success) {
      dispatch(clearState());
      navigate("/login");
      toast.success("Registration Successful");
    }

    if (error) return toast.error("All Fields Are Required/Error");

    if (loading) toast.info("Loading ...", { autoClose: 1000 });
  }, [success, error, loading, errorMessage, navigate, dispatch]);

  return (
    <div className="register d-flex justify-content-center align-items-sm-center py-5">
      <form onSubmit={handleSubmit} className="bg-white p-3">
        <h2 className="registerHeader mb-3">Register</h2>

        <div className="row">
          <div className="registerInputGroups col-12 col-sm me-md-3">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control mb-3"
              placeholder="Enter your first name"
              onChange={handleInputChange}
            />
          </div>

          <div className="registerInputGroups col-12 col-sm">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control mb-3"
              placeholder="Enter your last name"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className=" registerInputGroups col-12 col-sm me-md-3">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="example@email.com"
              onChange={handleInputChange}
            />
          </div>

          <div className="registerInputGroups col-12 col-sm">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className="form-control mb-3"
              placeholder="Enter your phone number"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="registerInputGroups col-12 col-sm me-md-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mb-3"
              placeholder="Enter password"
              onChange={handleInputChange}
            />
          </div>

          <div className="registerInputGroups col-12 col-sm">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control mb-3"
              placeholder="Re-enter password"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-12 mt-2">
          <button
            type="submit"
            className="registerBtn btn text-white rounded-0 border-0 w-100"
          >
            Create an Account
          </button>
        </div>

        <p className="registerAlternative">
          <span>or</span>
        </p>

        <div className="row px-3 mb-5">
          <button
            type="submit"
            className="registerFacebook col-12 col-sm btn btn-primary rounded-0 mb-3 me-md-5 border-0"
          >
            <a
              href="http://localhost:3000"
              className="text-white text-decoration-none "
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook /> Register with Facebook
            </a>
          </button>

          <button
            type="submit"
            className="registerGoogle col-12 col-sm btn btn-primary rounded-0 border-0"
          >
            <a
              href="http://localhost:3000"
              className="text-white text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGoogleCircle /> Register with Google
            </a>
          </button>
        </div>

        <p className="registerPolicy">
          By creating an Account, you agree to Our{" "}
          <span>
            <Link to="/" className="text-decoration-none">
              Terms & Conditions
            </Link>
            ,
          </span>{" "}
          Our{" "}
          <span>
            <Link to="/" className="text-decoration-none">
              Privacy Policy
            </Link>
            ,
          </span>{" "}
          and{" "}
          <span>
            <Link to="/" className="text-decoration-none">
              Money-Back Policy
            </Link>
          </span>
        </p>
        <hr />
        <p className="registerLogin">
          Already have an Account?{" "}
          <span>
            <Link to="/login" className="text-decoration-none">
              Log in
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
