// Libraries
import React, { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../ProductCard/ProductCard.component";
import "../ShopData/ShopData.styles.scss"



const ShopData = () => {
  const products = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.products.map((product) => (
      <ProductCard key={product.id} product={product}/>    
      ))}
    </div>
  );
};

export default ShopData;
