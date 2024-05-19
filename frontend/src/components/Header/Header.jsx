import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h1>Explore the goodness of soybeans with <span><br/>Guru Soya Products.</span></h1>
            <p>Welcome to Guru Soya Products. We are experts in creating soy-based delicacies that cater to your culinary preferences. Browse our diverse collection today.</p>
            <button><h3>Learn More!</h3> <img src={assets.right_arrow} alt="" className="right_arrow" /></button>
        </div>
        <div className="main_img">
                <div className="flow_line">
                    <svg width="923" height="719" viewBox="-21 -21 923 719" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M880.5 0H591.5C530.196 0 480.5 49.6964 480.5 111V111C480.5 172.304 430.804 222 369.5 222H112C50.1441 222 0 272.144 0 334V676.5" stroke="url(#paint0_linear_409_2536)" stroke-width="41"/>
                    <defs>
                    <linearGradient id="paint0_linear_409_2536" x1="465.5" y1="0.00012086" x2="-113" y2="641.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#445218"/>
                    <stop offset="1" stop-color="#87A330"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </div>
                <div className="product_bg"></div>
                <img src={assets.all_products} alt="" className='all_prods'/>
        </div>
    </div>
  )
}

export default Header