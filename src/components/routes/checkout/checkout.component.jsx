// import { useContext } from "react";
import { useSelector } from "react-redux";
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from "../../../store/cart/cart.selector";
import CheckoutItem from "../../checkout-item/checkout-item.component";
// import { CartContext } from "./../../../context/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  // const { cartItems, cartTotal, cartCount } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartCount = useSelector(selectCartCount);

  return (
    <div className="checkout-super-container">
      <div className="checkout-container">
        {cartCount > 0 ? (
          <>
            <div className="checkout">
              <div className="checkout-header">
                <div className="header-block">
                  <span>Product</span>
                </div>
                <div className="header-block">
                  <span>Description</span>
                </div>
                <div className="header-block">
                  <span>Quantity</span>
                </div>
                <div className="header-block">
                  <span>Price</span>
                </div>
                <div className="header-block">
                  <span>Remove</span>
                </div>
              </div>
              {cartItems.map((cartItem) => {
                return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
              })}
            </div>
            <span className="total">Total : {cartTotal}$</span>
          </>
        ) : (
          <h1>Your Cart is Empty!</h1>
        )}
      </div>
    </div>
  );
};

export default Checkout;
