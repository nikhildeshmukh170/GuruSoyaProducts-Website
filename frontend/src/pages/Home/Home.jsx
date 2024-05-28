import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import ProductCatagory from '../../components/ProductCatagory/ProductCatagory'
import Itemslist from '../../components/itemslist/Itemslist'
import Catagories from '../../components/Catagories/Catagories'
// import SectionBanner from "https://framer.com/m/Section-Banner-4gkX.js@ELteH7KJpwGrNHwRlIve"

const Home = () => {
  return (
    <div className='website'>
        <Header />
        <Banner />
        <ProductCatagory />
        <Itemslist />
        <Catagories />
        {/* <SectionBanner /> */}
    </div>
  )
}

export default Home