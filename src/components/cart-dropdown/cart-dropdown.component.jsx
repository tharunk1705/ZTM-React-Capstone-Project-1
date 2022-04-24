import "./cart-dropdown.styles.scss";
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
    <div className="cart-dropdown-container">
      {cartCount > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem cartItem={item} key={item.id} />
            ))}
          </div>
          <Button onClick={goToCheckout}>Checkout</Button>
        </>
      ) : (
        <h4
          style={{
            textAlign: "center",
          }}
        >
          {" "}
          Cart is Empty!
        </h4>
      )}
    </div>
  );
};

export default CartDropdown;
