import '../styles/AddToCart.css'
import { HiShoppingCart } from "react-icons/hi";

const AddToCart = () => {
  return (
    <button
      type="submit"
      className="addToCartBtn btn text-white rounded-0 border-0 w-100 my-3"
    >
      <HiShoppingCart className='me-4'  />
      Add to Cart
    </button>
  );
};

export default AddToCart;
