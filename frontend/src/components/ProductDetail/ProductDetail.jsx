import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import './ProductDetail.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const { item_list, cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const [product, setProduct] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const url = "http://gurusoyaproducts-website.onrender.com"; // Update this to your actual image base URL

  useEffect(() => {
    const foundProduct = item_list.find(item => String(item._id) === String(productId));
    setProduct(foundProduct);
    if (foundProduct) {
      setReviews(foundProduct.reviews || []);
    }
  }, [productId, item_list]);

  const handleBack = () => {
    window.history.back();
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim()) {
      const newReview = {
        id: reviews.length + 1,
        text: reviewText,
      };
      setReviews([...reviews, newReview]);
      setReviewText('');
    }
  };

  const handleBuyNow = () => {
    addToCart(product._id); // Add product to cart
    navigate('/checkout'); // Use navigate to redirect to checkout page
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-details-container">
      <img src={`${url}/images/${product.image}`} alt={product.name} className="product-image" />
      <div>
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.discription}</p>
        <div className="product-price">
          <img src={assets.currency_rupee} alt="currency" />{product.price}
        </div>
        <p className="product-weight">Weight: {product.weight}g</p>
        
        {/* Button Container */}
        <div className="button-container">
          {!cartItems[product._id] ? (
            <button className="cart-button" onClick={() => addToCart(product._id)}>
              Add To Cart <img src={assets.add_shopping_cart} alt="Add" />
            </button>
          ) : (
            <div className="item-counter">
              <button onClick={() => removeFromCart(product._id)}>-</button>
              <span>{cartItems[product._id]}</span>
              <button onClick={() => addToCart(product._id)}>+</button>
            </div>
          )}
          <button className="buy-now-button" onClick={handleBuyNow}>
            Buy Now <img src={assets.buy_now_icon} alt="Buy" />
          </button>
        </div>

        <div className="product-reviews">
          <h2>Customer Reviews</h2>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="review">
                <p>{review.text}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
          <form className="review-form" onSubmit={handleReviewSubmit}>
            <textarea
              className="review-input"
              placeholder="Write your review..."
              rows="4"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            <button type="submit" className="submit-review-btn">Submit Review</button>
          </form>
        </div>
        
        <div className="product-offers">
          Special discount available!
        </div>
      </div>
      <button className="back-btn" onClick={handleBack}>Back</button>
    </div>
  );
};

export default ProductDetails;
