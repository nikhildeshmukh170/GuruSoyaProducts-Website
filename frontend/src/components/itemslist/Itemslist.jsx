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

const Itemslist = ({ id, name, price, weight, discription, image }) => {

  const { item_list } = useContext(StoreContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CustomArrow icon={faChevronRight} />,
    prevArrow: <CustomArrow icon={faChevronLeft} />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update current slide index
    swipe: true,
    swipeToSlide: true,
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
          {item_list.map((item,index) => (
            <div key={index} className="prod_imgname">
              <div className="prod_img">
                <img className="offerTag" src={assets.offerTag} alt=""/>
                <div className="offer_Content">
                  <p>30%</p>
                  <p>off</p>
                </div>
                <img className="prod_main_img" src={url+"/images/"+item.image} alt={item.name} />
              </div>
              <div className="prod_content">
                <p className="prod_name">{item.name}</p>
                <p className="prod_discri">{item.discription}</p>
                <div className="button">
                  <div className="addtocart">
                    {!cartItems[item._id] ? (
                      <button className="cartbutton" onClick={() => addToCart(item._id)}>
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
                          onClick={() => removeFromCart(item._id)}
                        >
                          -
                        </button>
                        <p>{cartItems[item._id]}</p>
                        <button
                          className="increment-button"
                          onClick={() => addToCart(item._id)}
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
                      <p className="main_rate">{item.price}/-</p>
                      <h3>({item.weight}gm)</h3>
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
