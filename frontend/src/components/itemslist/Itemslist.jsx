import React, { useContext, useState } from "react";
import "./Itemlist.css";
import { assets, item_list } from "../../assets/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../../context/StoreContext";

// Custom Arrow Component
const CustomArrow = ({ className, style, onClick, icon }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderStyle: "solid",
        width: "25px",
        height: "25px",
        borderColor: "green",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="custom-arrow-icon" />
    </div>
  );
};

const Itemslist = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CustomArrow icon={faChevronRight} />,
    prevArrow: <CustomArrow icon={faChevronLeft} />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update current slide index
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const handleAddToCart = (itemName) => {
  //   setItemCounts((prevCounts) => ({
  //     ...prevCounts,
  //     [itemName]: (prevCounts[itemName] || 0) + 1,
  //   }));
  // };

  // const handleIncrement = (itemName) => {
  //   setItemCounts((prevCounts) => ({
  //     ...prevCounts,
  //     [itemName]: prevCounts[itemName] + 1,
  //   }));
  // };

  // const handleDecrement = (itemName) => {
  //   setItemCounts((prevCounts) => ({
  //     ...prevCounts,
  //     [itemName]: prevCounts[itemName] > 0 ? prevCounts[itemName] - 1 : 0,
  //   }));
  // };

  return (
    <div className="product_items">
      <div className="heading">
        <p>
          Purchase Today: <br /> Amplify Your Journey!
        </p>
      </div>
      <div className="prod_card">
        <Slider {...settings} currentSlide={currentSlide}>
          {item_list.map((item) => (
            <div key={item.item_name} className="prod_imgname">
              <div className="prod_img">
                <img src={item.item_image} alt={item.item_name} />
              </div>
              <div className="prod_content">
                <p className="prod_name">{item.item_name}</p>
                <p className="prod_discri">{item.item_discription}</p>
                <div className="button">
                  <div className="addtocart">
                    {!cartItems[item.item_id] ? (
                      <button className="cartbutton" onClick={() => addToCart(item.item_id)}>
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
                          onClick={() => removeFromCart(item.item_id)}
                        >
                          -
                        </button>
                        <p>{cartItems[item.item_id]}</p>
                        <button
                          className="increment-button"
                          onClick={() => addToCart(item.item_id)}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="rate">
                    <div className="rupee_sign">
                      <img src={assets.currency_rupee} alt="" />
                    </div>
                    <div className="price_gm">
                      <p className="main_rate">{item.item_rate}/-</p>
                      <h3>({item.item_weight}gm)</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Itemslist;
