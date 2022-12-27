import { useContext } from "react";
import { CartContext } from "contexts/CartContext";
import CartItem from "../cart-item/CartItem";
import Button from "components/button/Button";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      {cartItems.length === 0 ? (
        <div className="empty-message">Empty Cart</div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
      )}
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
