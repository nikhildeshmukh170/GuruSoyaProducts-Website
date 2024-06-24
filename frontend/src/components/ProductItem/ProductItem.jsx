import React, { useContext } from 'react'
import "./ProductItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const ProductItem = ({ id, name, price, weight, discription, image }) => {

    const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

  return (
    <div className="prod-item">
        <div className="prod-item-img-container">
            <img className="prod-item-image" src={url+"/images/"+image} alt="" />
        </div>
        <div className="prod-item-info">
            <div className="prod-item-name-rating">
                <p>{name}</p>
                <div className="star">
                  <img src={assets.ratingStar} alt="" />
                  <p>(46 reviews)</p>
                </div>
            </div>
            <p className="prod-item-desc">{discription}</p>
            <div className="product-item-price-weight">
                <p className='weight'>({weight}gm)</p>
                <p className='price'>&#8377;{price} </p>
            </div>
            <div className="prodaddtocart">
                    {!cartItems[id] ? (
                      <button className="cartbutton" onClick={() => addToCart(id)}>
                        Add To Cart
                        <img
                          className="add"
                          src={assets.add_shopping_cart}
                          alt=""
                        />
                      </button>
                    ) : (
                      <div className="item_counter">
                        <button
                          className="decrement-button"
                          onClick={() => removeFromCart(id)}
                        >
                          -
                        </button>
                        <p>{cartItems[id]}</p>
                        <button
                          className="increment-button"
                          onClick={() => addToCart(id)}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
        </div>
    </div>
  )
}

export default ProductItem

