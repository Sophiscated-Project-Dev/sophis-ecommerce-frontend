import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { addCheckoutInfo } from '../../features/checkout/checkoutSlice';
import '../styles/Checkout.css';
import { Link } from 'react-router-dom';
import AddressBox from '../components/AddressBox';
import CheckoutHeader from '../components/CheckoutHeader';

import PaymentMethod from '../components/PayMethod';
import {
  FaApplePay,
  FaCcVisa,
  FaCcMastercard,
  FaDhl,
} from 'react-icons/fa';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { checkoutInfo } = useSelector((state) => state.checkout);

  const [sameAddress, setSameAddress] = useState(false);

  const initial = checkoutInfo;

  const [paymentMethod, setPaymentMethod] = useState(
    checkoutInfo.paymentMethod
  );
  const [billingAddress, setBillingAddress] = useState(initial);
  const [shippingAddress, setShippingAddress] = useState(initial);

  //Submit checkout form
  function handleCheckout(event) {
    event.preventDefault();

    dispatch(addCheckoutInfo({ ...billingAddress, paymentMethod }));
    navigate('/confirm-order');
  }

  function handleAddress() {
    if (!sameAddress) {
      setShippingAddress(billingAddress);
    }
    setSameAddress((prevState) => !prevState);
  }

  return (
    <>
      <div className="container">
        <div className="checkout-nav">
          <Link to={'/'}>Home</Link>
          {'/'}
          <Link to={'/'}>Cart</Link>
          {'/'}
          <Link to={'/checkout'}>Checkout</Link>
        </div>
      </div>
      <main className="checkout-main">
        <h2 className="checkout-title">Checkout</h2>

        <div className="checkout-bill">
          <div className="checkout-price">
            <span className="checkout-total-tag">Total</span>
            <span className="checkout-total-price">$3,000</span>
          </div>

          <form className="checkout-form" onSubmit={handleCheckout}>
            <div className="checkout-section">
              <CheckoutHeader title={'Billing Address'} />
              <AddressBox
                data={billingAddress}
                setData={setBillingAddress}
              />
            </div>

            <div className="checkout-section">
              <CheckoutHeader title={'Shipping Address'} />
              <label htmlFor="auto-address" className="same-as">
                <input
                  id="auto-address"
                  type="checkbox"
                  value={sameAddress}
                  onChange={handleAddress}
                />
                same as billing address
              </label>
              <AddressBox
                data={shippingAddress}
                setData={setShippingAddress}
              />
            </div>

            <div className="checkout-section">
              <CheckoutHeader title={'Payment Method'} />
              <ul className="payment-methods">
                <PaymentMethod
                  id={'master-card'}
                  Icon={<FaCcMastercard />}
                  setPaymentMethod={setPaymentMethod}
                />
                <PaymentMethod
                  id={'visa'}
                  Icon={<FaCcVisa />}
                  setPaymentMethod={setPaymentMethod}
                />
                <PaymentMethod
                  id={'apple-pay'}
                  Icon={<FaApplePay />}
                  setPaymentMethod={setPaymentMethod}
                />
                <PaymentMethod
                  id={'dhl'}
                  Icon={<FaDhl />}
                  setPaymentMethod={setPaymentMethod}
                />
              </ul>
            </div>

            <button className="btn confirm-order">
              Confirm order
            </button>
          </form>
          <Link to={'/'}>continue shopping</Link>
        </div>
      </main>
    </>
  );
};

export default Checkout;
