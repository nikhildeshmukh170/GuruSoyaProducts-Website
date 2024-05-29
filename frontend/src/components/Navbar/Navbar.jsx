import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
        <Link to="/" onClick={() => setMenu("Home")}>
                <img src={assets.black_logo} alt="Logo" className="logo" />
            </Link>
        <div className="links">
            <ul className="navbar-menu">
                <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}><Link to="/">Home</Link></li>
                <li onClick={()=>setMenu("About us")} className={menu==="About us"?"active":""}><Link to="/aboutus">About us</Link></li>
                <li onClick={()=>setMenu("Products")} className={menu==="Products"?"active":""}><Link to="/products">Products</Link></li>
                <li onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}><Link to="/contactus">Contact us</Link></li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" className='search-icon' />
                <div className="navbar-search-icon">
                    <img src={assets.shopping_cart} alt="" />
                    <div className="dot"></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>sign in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar