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
    return cartItems.filter(
      (cartItem) => cartItem?.id !== productToBeRemoved?.id
    );
  }
};
const clearItemFromCart = (cartItems, itemToBeCleared) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToBeCleared.id);
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  clearProductFromCart: () => {},
  cartCount: 0,
  cartTotal :0,
});
export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems?.reduce(
      (total, cartItems) => total + cartItems.quantity,
      0
    );
    setCartCount(newCartCount);
    const newCartTotal = cartItems?.reduce(
      (total, cartItems) => total + cartItems.quantity * cartItems.price,0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addProductToCart = (productToBeAdded) => {
    setCartItems(checkProductInCart(cartItems, productToBeAdded));
  };

  const removeProductFromCart = (productToBeAdded) => {
    setCartItems(reducedCartItem(cartItems, productToBeAdded));
  };

  const clearProductFromCart = (itemToBeCleared) => {
    setCartItems(clearItemFromCart(cartItems, itemToBeCleared));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addProductToCart,
    cartCount,
    removeProductFromCart,
    clearProductFromCart,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
