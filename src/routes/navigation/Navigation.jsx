import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "contexts/UserContext";
import { CartContext } from "contexts/CartContext";
import { ReactComponent as CrwnLogo } from "assets/icons/crown.svg";
import { signOutUser } from "utils/firebase/firebase";
import CartIcon from "components/navigation/cart/cart-icon/CartIcon";
import CartDropdown from "components/navigation/cart/cart-dropdown/CartDropdown";
import "./navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              sign out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              sign in
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
