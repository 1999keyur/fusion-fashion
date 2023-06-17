import { CartContext } from "../../context/cart.context";
import "../CheckoutCartItem/CheckoutCartItem.styles.scss";

import React, { useContext } from "react";

const CheckoutCartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { clearProductFromCart, addProductToCart, removeProductFromCart } =
    useContext(CartContext);
  const handleClearProductFromCart = (cartItemToBeRemoved) => {
    clearProductFromCart(cartItemToBeRemoved);
  };
  const handleRemoveProductFromCart = (cartItemToBeRemoved) => {
    removeProductFromCart(cartItemToBeRemoved);
  };
  const handleAddProductFromCart = (cartItemToBeAdded) => {
    addProductToCart(cartItemToBeAdded);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => handleRemoveProductFromCart(cartItem)}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => handleAddProductFromCart(cartItem)}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => handleClearProductFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutCartItem;
