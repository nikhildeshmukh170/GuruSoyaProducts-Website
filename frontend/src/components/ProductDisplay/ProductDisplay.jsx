import React, { useContext } from "react";
import "./ProductDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import ProductItem from "../ProductItem/ProductItem";

const ProductDisplay = ({ category }) => {
  const { item_list } = useContext(StoreContext);

  return (
    <div className="ProductDisplay" id="ProductDisplay">
      <h2>{category ? `${category} Products` : "All Products"}</h2>
      <div className="prod-display-list">
        {item_list.length > 0 ? (
          item_list.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              weight={item.weight}
              description={item.description}
              image={item.image}
            />
          ))
        ) : (
          <p className="no-products">No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;
