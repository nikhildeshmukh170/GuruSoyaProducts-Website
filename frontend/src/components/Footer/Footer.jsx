import React, { useState } from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {

    const [menu,setMenu] = useState("Home");
  
    return (
        <div className='footer'>
            <div className="footer_content">

                <div className="logo">
                <Link to="/" onClick={() => setMenu("Home")}>
                <img src={assets.white_logo} alt="Logo" className="logo" />
            </Link>
                </div>
                <div className="footer_link">
                    <div className="links">
                        <ul className="footer-menu">
                        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}><Link to="/">Home</Link></li>
                    <li onClick={()=>setMenu("About us")} className={menu==="About us"?"active":""}><Link to="/aboutus">About us</Link></li>
                    <li onClick={()=>setMenu("Products")} className={menu==="Products"?"active":""}><Link to="/products">Products</Link></li>
                    <li onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}><Link to="/contactus">Contact us</Link></li>
                        </ul>
                    </div>
                    <div className="copywrite">
                        <p>&copy; 2024 Guru Soya Products</p>
                    </div>
                </div>
                <di className="footer_img">
                    <img src={assets.FooterImg} alt="" />
                </di>
            </div>
        </div>
    )
}

export default Footer