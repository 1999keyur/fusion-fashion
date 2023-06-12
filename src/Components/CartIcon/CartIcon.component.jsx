import "../CartIcon/CartIcon.styles.scss";
import { ReactComponent as ShoppingBagIcon } from "../../Assets/shopping-bag.svg";
import React from "react";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  // console.log(isCartOpen)
  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        setIsCartOpen(!isCartOpen);
      }}
    >
      <ShoppingBagIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
