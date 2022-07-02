import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import Layout from "../../Layout";
import "../styles/Register.css";

const Register = () => {
  return (
    <div className="register d-flex justify-content-center align-items-sm-center py-5">
      <form className="bg-white p-3">
        <h2 className="registerHeader mb-3">Register</h2>

        <div className="row">
          <div className="registerInputGroups col-12 col-sm me-md-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your first name"
            />
          </div>

          <div className="registerInputGroups col-12 col-sm">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="row">
          <div className=" registerInputGroups col-12 col-sm me-md-3">
            <label>Email Address</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="example@email.com"
            />
          </div>

          <div className="registerInputGroups col-12 col-sm">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="row">
          <div className="registerInputGroups col-12 col-sm me-md-3">
            <label>Password</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter password"
            />
          </div>

          <div className="registerInputGroups col-12 col-sm">
            <label>Confirm Password</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Re-enter password"
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
