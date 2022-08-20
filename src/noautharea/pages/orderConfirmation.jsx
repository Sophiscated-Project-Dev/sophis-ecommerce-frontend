// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import '../styles/orderConfirmation.css';
import { Link } from 'react-router-dom';

const Confirm = () => {
  // const navigate = useNavigate();
  // const { checkoutInfo} = useSelector(
  //   (state) => state.checkout
  // );

  //console.log(checkoutInfo);
  return (
    <div className="O_Confirm">
      <p>Are you sure you want to proceed with the payment ?</p>
        <button className="BTN_1">Proceed</button>
      <Link to="/checkout">
        <button className="BTN_2">Cancel</button>
      </Link>
    </div>
  );
};

export default Confirm;
