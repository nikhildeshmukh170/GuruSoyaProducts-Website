import React, { useState } from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscription = () => {
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="logo_section">
          <Link to="/" className="footer_logo">
            <img src={assets.white_logo} alt="Guru Soya Logo" />
          </Link>
          <p className="tagline">
            Healthy. Nutritious. Delicious. Bringing you the best soy-based
            products!
          </p>
          <div className="social_media">
            <a
              href="https://www.facebook.com/gurusoyaproductsofficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social_icon facebook">
                <i className="fab fa-facebook-f"></i>
              </div>
            </a>
            <a
              href="https://www.instagram.com/gurusoyaproducts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social_icon instagram">
                <i className="fab fa-instagram"></i>
              </div>
            </a>
            <a
              href="https://x.com/GuruSoya94664"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social_icon twitter">
                <i className="fab fa-twitter"></i>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/guru-soya-products/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social_icon linkedin">
                <i className="fab fa-linkedin"></i>
              </div>
            </a>
          </div>
        </div>

        <div className="footer_nav">
          <h3>Quick Links</h3>
          <ul className="footer_menu">
            <li>
              <Link to="/">
                <span className="icon">&#x1F3E0;</span> Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus">
                <span className="icon">&#x1F4D6;</span> About Us
              </Link>
            </li>
            <li>
              <Link to="/products">
                <span className="icon">&#x1F4E6;</span> Products
              </Link>
            </li>
            <li>
              <Link to="/contactus">
                <span className="icon">&#x1F4E9;</span> Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="support">
          <h3>Customer Support</h3>
          <ul>
            <li>
              <Link to="/faq">
                <span className="icon">&#x2754;</span> FAQs
              </Link>
            </li>
            <li>
              <Link to="/shipping">
                <span className="icon">&#x1F6F3;</span> Shipping Info
              </Link>
            </li>
            <li>
              <Link to="/returns">
                <span className="icon">&#x21A9;</span> Return Policy
              </Link>
            </li>
            <li>
              <Link to="/privacy">
                <span className="icon">&#x1F512;</span> Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="newsletter">
          <h3>Newsletter</h3>
          <p>Get updates on our latest products and exclusive offers!</p>
          <div className="subscribe_form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscription}>Subscribe</button>
          </div>
        </div>

        <div className="footer_bottom">
          <p>&copy; 2024 Guru Soya Products. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
