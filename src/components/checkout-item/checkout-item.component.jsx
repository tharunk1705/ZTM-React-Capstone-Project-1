import "./checkout-item.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemtoCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

// import { CartContext } from "../../context/cart.context";
// import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  // const { clearItemFromCart, addItemtoCart, removeItemFromCart } =
  //   useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

  const addItemHandler = () => dispatch(addItemtoCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}$</span>
      <div className="remove-button" onClick={clearHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
