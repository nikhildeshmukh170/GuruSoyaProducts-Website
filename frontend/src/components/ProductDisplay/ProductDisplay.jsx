import React, { useContext } from "react";
import "./ProductDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import ProductItem from "../ProductItem/ProductItem";

const ProductDisplay = ({ category }) => {
  const { item_list } = useContext(StoreContext);

  return (
    <div className="ProductDisplay" id="ProductDisplay">
      <h2>All Products</h2>
      <div className="prod-display-list">
        {item_list.map((item, index) => {
          return(
          <ProductItem key={index} id={item._id} name={item.name} price={item.price} weight={item.weight} discription={item.discription} image={item.image}/>
        )})}
      </div>
    </div>
  );
};

export default ProductDisplay;
