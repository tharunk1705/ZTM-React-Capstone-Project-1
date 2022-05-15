import {
  CardDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";
import Button from "./../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen, isCartOpen, cartCount } =
    useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckout = () => {
    setIsCartOpen(!isCartOpen);
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
