import { useRef } from 'react';
import { useSelector } from 'react-redux';

const PaymentMethod = ({ Icon, id, setPaymentMethod }) => {
    const radioRef = useRef();
    //radioRef.current.checked = null
  const { checkoutInfo } = useSelector((state) => state.checkout);

  //if (radioRef.current?.checked) return radioRef.current.checked
    

  function setPayMethod(event) {
      if (radioRef.current?.checked) { setPaymentMethod(event.target.value); }
  }

  return (
    <li className={`payment-method ${id}`}>
      <input
        name="payment-method"
        id={id}
        value={id}
        onChange={setPayMethod}
        ref={radioRef}
              type="radio"
              //checked={radioRef.current}
      />
      <label htmlFor={id}>{Icon}</label>
    </li>
  );
};

export default PaymentMethod;
