import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import "./ProductItem.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const ProductItem = ({ id, name, price, weight, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className="prod-item">
      <Link to={`/product/${id}`} className="prod-item-img-container"> {/* Make the image clickable */}
        <img className="prod-item-image" src={`${url}/images/${image}`} alt={name} />
      </Link>
      <div className="prod-item-info">
        <div className="prod-item-name-rating">
          <p className="prod-item-name">{name}</p>
          <div className="star">
            <img src={assets.ratingStar} alt="Rating Star" />
            <p className="prod-item-reviews">(46 reviews)</p>
          </div>
        </div>
        <p className="prod-item-desc">{description}</p>
        <div className="product-item-price-weight">
          <p className="weight">({weight} gm)</p>
          <p className="price">₹{price}</p>
        </div>
        <div className="prodaddtocart">
          {!cartItems[id] ? (
            <button className="cartbutton" onClick={() => addToCart(id)}>
              Add To Cart
              <img className="add" src={assets.add_shopping_cart} alt="Add to cart" />
            </button>
          ) : (
            <div className="item_counter">
              <button className="decrement-button" onClick={() => removeFromCart(id)}>
                -
              </button>
              <p>{cartItems[id]}</p>
              <button className="increment-button" onClick={() => addToCart(id)}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
