import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import "./ProductDetail.css"

const ProductDetails = () => {
  const { productId } = useParams();
  const { item_list } = useContext(StoreContext);
  const [product, setProduct] = useState(null);

  // Define your URL for images
  const url = "http://localhost:5173/images"; // Update this to your actual image base URL

  useEffect(() => {
    console.log("Product ID from URL:", productId);
    console.log("Item List in ProductDetails:", item_list);
    
    // Find the product based on productId
    const foundProduct = item_list.find(item => String(item._id) === String(productId));
    console.log("Found Product:", foundProduct);
    setProduct(foundProduct);
  }, [productId, item_list]);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-details-container">
      <img src={`${url}/images/${product.image}`} alt={product.name} className="product-image" />
      <h1 className="product-title">{product.name}</h1>
      <p className="product-description">{product.discription}</p>
      <div className="product-price">
        <img src={assets.currency_rupee} alt="currency" />{product.price}
      </div>
      <p className="product-weight">Weight: {product.weight}g</p>
      <div className="product-actions">
        <button className="add-to-cart-btn">
          <img src={assets.add_shopping_cart} alt="add to cart" /> Add to Cart
        </button>
        <button className="favorite-btn">Add to Favorites</button>
      </div>
      <div className="product-reviews">
        <h2>Customer Reviews</h2>
        <p>No reviews yet.</p>
      </div>
      <div className="product-offers">
        <img src={assets.offerTag} alt="offer" /> Special discount available!
      </div>
    </div>
  );
};

export default ProductDetails;
