import "../styles/AddToCart.css";
import { HiShoppingCart } from "react-icons/hi";
import { addToCart } from "../../features/Cart/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddToCart = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <button
      type="submit"
      className="addToCartBtn btn text-white rounded-0 border-0 w-100 my-4"
      onClick={() => handleAddToCart(product)}
    >
      <HiShoppingCart className="me-4" />
      Add to Cart
    </button>
  );
};

export default AddToCart;
