import React, { useContext } from "react";
import "./Checkout.styles.scss";
import { CartContext } from "../../context/cart.context";

const Checkout = () => {
  const { cartItems, addProductToCart, removeProductFromCart } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="checkout-block">
          <span>Product</span>
        </div>
        <div className="checkout-block">
          <span>Description</span>
        </div>
        <div className="checkout-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-block">
          <span>Price</span>
        </div>
        <div className="checkout-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        const { name, id, quantity } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={() => addProductToCart(cartItem)}>+</span>
            <br />
            <span onClick={() => removeProductFromCart(cartItem)}>-</span>
          </div>
        );
      })}
      <span>Total : 0</span>
    </div>
  );
};

export default Checkout;
