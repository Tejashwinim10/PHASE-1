import { FaShoppingCart } from "react-icons/fa";
import "./CartIcon.css";

const CartIcon = ({ cartCount }) => {
  return (
    <div className="cart-icon">
      <FaShoppingCart size={28} />
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
};

export default CartIcon;
