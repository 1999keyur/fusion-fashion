import React, { useContext } from "react";
import "./Checkout.styles.scss";
import { CartContext } from "../../context/cart.context";
import CheckoutCartItem from "../../Components/CheckoutCartItem/CheckoutCartItem.component";

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
      {cartItems.map((cartItem) => (
        <CheckoutCartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span>Total : 0</span>
    </div>
  );
};

export default Checkout;
