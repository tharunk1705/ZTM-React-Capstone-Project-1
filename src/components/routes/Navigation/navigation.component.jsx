// import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as CrownLogo } from "./../../../assets/crown.svg";
import CartIcon from "./../../cart-icon/cart-icon.component";
import CartDropdown from "./../../cart-dropdown/cart-dropdown.component";
import { signOutUser } from "./../../../utils/firebase/firebase.utils";
// import { UserContext } from "./../../../context/user.context";
// import { CartContext } from "./../../../context/cart.context";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  OutletContainer,
} from "./navigation.styles.jsx";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);

  const currentUser = useSelector(selectCurrentUser);

  // const { isCartOpen } = useContext(CartContext);

  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  );
};

export default Navigation;
