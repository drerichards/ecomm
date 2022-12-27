import { useContext } from "react";
import { CartContext } from "contexts/CartContext";
import { ReactComponent as ShoppingCartIcon } from "assets/icons/shopping-bag.svg";
import "./cart-icon.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
