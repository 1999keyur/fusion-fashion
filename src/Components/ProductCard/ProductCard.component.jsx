import React, { useContext } from "react";
import CustomButton from "../CustomButton/CustomButton.component";
import "../ProductCard/ProductCard.styles.scss";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addProductToCart } = useContext(CartContext);
  // const addProductToCartFunction =()=>{

  // }
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        buttonType="inverted"
        onClick={() => addProductToCart(product)}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default ProductCard;
