import "./cart-item.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">
          <strong>{name}</strong>
        </span>
        <hr />
        <div className="price-container">
          <span>${price}</span>
          <span>x {quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
