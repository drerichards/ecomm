import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "contexts/UserContext";
import { CartContext } from "contexts/CartContext";
import { ReactComponent as CrwnLogo } from "assets/icons/crown.svg";
import { signOutUser } from "utils/firebase/firebase";
import CartIcon from "components/navigation/cart/cart-icon/CartIcon";
import CartDropdown from "components/navigation/cart/cart-dropdown/CartDropdown";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>sign out</NavLink>
          ) : (
            <NavLink to="/auth">sign in</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
