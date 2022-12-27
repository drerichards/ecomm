import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "contexts/UserContext";
import { ReactComponent as CrwnLogo } from "assets/crown.svg";
import { signOutUser } from "utils/firebase/firebase";
import "./navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
          {/* <Link className="nav-link"></Link> */}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
