import { CartContext } from "../store/shopping_cart";
import { useContext } from "react";

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext); // Properly call useContext

  const onAddToCart = () => {
    addItemToCart(id); // Use addItemToCart to add the product to the cart
  };

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={onAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
