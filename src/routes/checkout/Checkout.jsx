import { useContext } from "react";
import { CartContext } from "contexts/CartContext";
import CheckoutItem from "components/auth/checkout-item/CheckoutItem";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  PriceTotal,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const {
    cartItems,
    cartTotal,
    addItemToCart,
    removeItemFromCart,
    clearItemsFromCart,
  } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => {
        return (
          <CheckoutItem
            key={item.id}
            cartItem={item}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
            clearItemsFromCart={clearItemsFromCart}
          />
        );
      })}
      <PriceTotal>Total: ${cartTotal}</PriceTotal>
    </CheckoutContainer>
  );
};

export default Checkout;
