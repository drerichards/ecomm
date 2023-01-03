import {
  CartItemContainer,
  ItemDetails,
  Name,
  HorizontalLine,
  PriceContainer,
} from "./cartItem.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>
          <strong>{name}</strong>
        </Name>
        <HorizontalLine />
        <PriceContainer>
          <span>${price}</span>
          <span>x {quantity}</span>
        </PriceContainer>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
