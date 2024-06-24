import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
// import Banner from "../../components/Banner/Banner";
import Itemslist from "../../components/itemslist/Itemslist";
import CategorySection from "../../components/CategorySection/CategorySection";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import Faqs from "../../components/Faqs/Faqs";
// import Footer from '../../components/Footer/Footer'
// import SectionBanner from "https://framer.com/m/Section-Banner-4gkX.js@ELteH7KJpwGrNHwRlIve"

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="website">
      <Header />
      {/* <Banner /> */}
      {/* <ProductCatagory /> */}
      <CategorySection category={category} setCategory={setCategory} />
      <Itemslist />
      <ProductDisplay category={category} />
      <Faqs />
      {/* <Catagories /> */}
      {/* <SectionBanner /> */}
    </div>
  );
};

export default Home;
