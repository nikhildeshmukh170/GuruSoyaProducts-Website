import React, { useContext, useState } from "react";
import "./Itemlist.css";
import { assets } from "../../assets/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const CustomArrow = ({ className, style, onClick, icon }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#1a6f43",
      color: "#fff",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} />
  </div>
);

const Itemslist = () => {
  const { item_list, cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow icon={faChevronRight} />,
    prevArrow: <CustomArrow icon={faChevronLeft} />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="product-items">
      <h2 className="heading">Shop Your Favorites Today!</h2>
      <div className="product-card-container">
        <Slider {...settings} currentSlide={currentSlide}>
          {item_list.map((item, index) => (
            <Link key={index} to={`/product/${item._id}`} className="product-card">
              <div className="product-image-wrapper">
                <img className="product-image" src={`${url}/images/${item.image}`} alt={item.name} />
                <div className="overlay">
                  <span>30% OFF</span>
                </div>
              </div>
              <div className="product-details">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-description">{item.discription}</p>
                <div className="button-container">
                  {!cartItems[item._id] ? (
                    <button className="cart-button" onClick={() => addToCart(item._id)}>
                      Add To Cart <img src={assets.add_shopping_cart} alt="Add" />
                    </button>
                  ) : (
                    <div className="item-counter">
                      <button onClick={() => removeFromCart(item._id)}>-</button>
                      <span>{cartItems[item._id]}</span>
                      <button onClick={() => addToCart(item._id)}>+</button>
                    </div>
                  )}
                  <div className="price-container">
                    <span className="price">₹{item.price}</span>
                    <span className="weight">({item.weight}gm)</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Itemslist;
