import { useContext } from "react";
import { CartContext } from "contexts/CartContext";
import { ReactComponent as ShoppingCartIcon } from "assets/icons/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cartIcon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingCartIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
