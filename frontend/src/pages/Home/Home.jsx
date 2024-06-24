import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Itemslist from '../../components/itemslist/Itemslist';
import CategorySection from '../../components/CategorySection/CategorySection';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import Faqs from '../../components/Faqs/Faqs';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS
// import Footer from '../../components/Footer/Footer'
// import SectionBanner from "https://framer.com/m/Section-Banner-4gkX.js@ELteH7KJpwGrNHwRlIve"

const Home = () => {
  const [category, setCategory] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired options
  }, []);

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
      {/* <Catagories /> */}
      {/* <SectionBanner /> */}
    </div>
  );
};

export default Home;
