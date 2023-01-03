import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "contexts/CartContext";
import CartItem from "../cart-item/CartItem";
import Button from "components/button/Button";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cartCropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const gotToCheckoutHandler = () => navigate("/checkout");

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={gotToCheckoutHandler}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
