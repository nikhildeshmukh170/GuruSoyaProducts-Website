import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Itemslist from '../../components/itemslist/Itemslist';
import CategorySection from '../../components/CategorySection/CategorySection';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import Faqs from '../../components/Faqs/Faqs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [category, setCategory] = useState("All");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Close popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="website">
      <div data-aos="fade-down">
        <Header />
      </div>
      <div data-aos="zoom-in-up">
        <Banner />
      </div>
      <div data-aos="fade-left">
        <CategorySection category={category} setCategory={setCategory} />
      </div>
      <div data-aos="fade-right">
        <Itemslist />
      </div>
      <div data-aos="fade-up">
        <ProductDisplay category={category} />
      </div>
      <div data-aos="fade-down">
        <Faqs />
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Notice</h2>
            <p>Dear Customer, we are working on online payments. For now, contact customer care to place your order.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
