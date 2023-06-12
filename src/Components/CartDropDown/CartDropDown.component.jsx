import React, { useContext } from "react";
import "../CartDropDown/CartDropDown.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";
import { CartContext } from "../../context/cart.context";
import CartItem from "../CartItem/CartItem.component";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const goToCheckoutHandler = ()=>{
    navigate('/checkout')
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.map((cartItem) => (
          <CartItem key={cartItem?.id} cartItem={cartItem} />
        ))}
      </div>
      <CustomButton onClick={goToCheckoutHandler}>Checkout</CustomButton>
    </div>
  );
};

export default CartDropDown;
