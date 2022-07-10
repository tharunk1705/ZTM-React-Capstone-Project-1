import { useDispatch, useSelector } from "react-redux";
import { addItemtoCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
// import { useContext } from "react";
// import { CartContext } from "./../../context/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "./../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  // const { addItemtoCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemtoCart(cartItems, product));
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
