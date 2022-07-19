import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo1.png";
import DoorMan from "../../assets/images/door-service.png";
import FreeDelivery from "../../assets/images/free-shipping.png";
import "../styles/SellerCard.css";
import "../styles/DeliveryCard.css";

const DeliveryCard = () => {
  return (
    <div id="delivery" className="bg-white mx-auto">
      <div className="mb-3">Delivery & Return</div>

      <div className="deliveryBody row">
        <Link to="/" className="deliveryLogo text-decoration-none d-flex mb-2">
          <img src={Logo} alt="Sophis Logo" />
          <h3 className=" align-self-end">
            Sophis <span>Mart</span>
          </h3>
        </Link>

        <p className="text-dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
          ultrices ullamcorper donec nec amet
        </p>

        <h2 className="mt-2 mb-3">Choose Location</h2>

        <div className="deliverySelect position-relative mb-3">
          <div className="deliverySelectIcon position-absolute top-0">
            <i className="position-absolute">&#9660;</i>
          </div>

          <select className="form-control" id="sel1">
            <option defaultValue="Kwara">Kwara</option>
            <option>2</option>
          </select>
        </div>

        <div className="deliverySelect position-relative mb-3">
          <div className="deliverySelectIcon position-absolute top-0">
            <i className="position-absolute">&#9660;</i>
          </div>

          <select className="form-control text-muted">
            <option defaultValue="Select your desired area">
              Select your desired area
            </option>
            <option>2</option>
          </select>
        </div>

        <hr className=" mx-auto" />

        <div className="row d-flex deliveryMode mx-auto">
          <div className="col-3 deliveryModeIcon ">
            <img src={DoorMan} className="me-auto" alt="door service" />
          </div>

          <div className="col-9 deliveryModeText flex-grow-1 ">
            <div className="d-flex justify-content-between">
              <p>Door Delivery</p>
              <Link to="/" className="text-decoration-none">
                Details
              </Link>
            </div>
            <p>
              Your Product will be delivered on{" "}
              <span className="fw-bold">21st of June</span> if you place you
              order within the next <span className="fw-bold">One(1) hour</span>
              .
            </p>
          </div>
        </div>

        <div className="row d-flex deliveryMode mx-auto">
          <div className="col-3 deliveryModeIcon ">
            <img src={FreeDelivery} className="me-auto" alt="free pick up" />
          </div>

          <div className="col-9 deliveryModeText flex-grow-1 ">
            <div className="d-flex justify-content-between">
              <p>Office Pick up</p>
              <Link to="/" className="text-decoration-none">
                Details
              </Link>
            </div>
            <p>
              Your Product will be delivered on{" "}
              <span className="fw-bold">21st of June</span> if you place you
              order within the next <span className="fw-bold">One(1) hour</span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCard;
