import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "./../../../assets/crown.svg";
import CartIcon from "./../../cart-icon/cart-icon.component";
import CartDropdown from "./../../cart-dropdown/cart-dropdown.component";
import { signOutUser } from "./../../../utils/firebase/firebase.utils";
import { UserContext } from "./../../../context/user.context";
import { CartContext } from "./../../../context/cart.context";
import "./navigation.styles.scss";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
