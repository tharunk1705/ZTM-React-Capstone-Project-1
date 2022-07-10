import {
  CardDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";
import Button from "./../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCartCount,
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";
// import { CartContext } from "../../context/cart.context";
// import { useContext } from "react";

const CartDropdown = () => {
  // const { cartItems, setIsCartOpen, isCartOpen, cartCount } =
  //   useContext(CartContext);

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const navigate = useNavigate();

  const goToCheckout = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    navigate("/checkout");
  };
  return (
    <CardDropdownContainer>
      {cartCount > 0 ? (
        <>
          <CartItems>
            {cartItems.map((item) => (
              <CartItem cartItem={item} key={item.id} />
            ))}
          </CartItems>
          <Button onClick={goToCheckout}>Checkout</Button>
        </>
      ) : (
        <EmptyMessage
          style={{
            textAlign: "center",
          }}
        >
          {" "}
          Cart is Empty!
        </EmptyMessage>
      )}
    </CardDropdownContainer>
  );
};

export default CartDropdown;
