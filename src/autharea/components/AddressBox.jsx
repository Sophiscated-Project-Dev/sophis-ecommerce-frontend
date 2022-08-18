import { useSelector, useDispatch } from 'react-redux';
import {
  addBuyerInfo,
  addPayment,
} from '../../features/checkout/checkoutSlice';

import { BsPencil } from 'react-icons/bs';
import { useRef } from 'react';

const AddressBox = ({ data, setData }) => {
  const ref = useRef(null);
  function handleEdit() {
    ref.current.focus();
  }

  function handleChange(event, inputName) {
    setData((prev) => {
      return {
        ...prev,
        [inputName]: event.target.value,
      };
    });
  }

  return (
    <div className="address-box">
      <div className="address-container">
        <input
          className="address-input"
          type="text"
          placeholder="Firstname"
          value={data.name}
          ref={ref}
          onChange={(event) => handleChange(event, 'name')}
        />
        <input
          className="address-input"
          type="email"
          placeholder="Email address"
          value={data.email}
          onChange={(event) => handleChange(event, 'email')}
        />
        <input
          className="address-input"
          type="text"
          placeholder="Street"
          value={data.street}
          onChange={(event) => handleChange(event, 'street')}
        />
        <div className="location">
          <input
            className="address-input"
            type="text"
            placeholder="State"
            value={data.state}
            onChange={(event) => handleChange(event, 'state')}
          />
          <input
            className="address-input"
            type="text"
            placeholder="Country"
            value={data.country}
            onChange={(event) => handleChange(event, 'country')}
          />
        </div>
      </div>
      <button
        className="btn address-edit"
        type="button"
        onClick={handleEdit}
      >
        <span>Edit</span>
        <BsPencil />
      </button>
    </div>
  );
};

export default AddressBox;
