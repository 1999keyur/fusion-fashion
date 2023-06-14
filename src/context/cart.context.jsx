import { createContext, useEffect, useState } from "react";

const checkProductInCart = (cartItems, productToBeAdded) => {
  const productAlreadyInCart = cartItems.find(
    (item) => item?.id === productToBeAdded?.id
  );
  if (productAlreadyInCart) {
    return cartItems.map((cartItem) =>
      cartItem?.id === productToBeAdded?.id
        ? { ...cartItem, quantity: cartItem?.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToBeAdded, quantity: 1 }];
};

const reducedCartItem = (cartItems, productToBeRemoved) => {
  const cartItemToBeRemoved = cartItems.find(
    (cartItem) => cartItem.id === productToBeRemoved.id
  );
  if (cartItemToBeRemoved.quantity >= 2) {
    return cartItems.map((cartItem) =>
      cartItem?.id === productToBeRemoved?.id
        ? { ...cartItem, quantity: cartItem?.quantity - 1 }
        : cartItem
    );
  }
  if (cartItemToBeRemoved.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem?.id !== productToBeRemoved?.id);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
});
export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItems) => total + cartItems.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  const addProductToCart = (productToBeAdded) => {
    setCartItems(checkProductInCart(cartItems, productToBeAdded));
  };

  const removeProductFromCart = (productToBeAdded) => {
    setCartItems(reducedCartItem(cartItems, productToBeAdded));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addProductToCart,
    cartCount,
    removeProductFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
