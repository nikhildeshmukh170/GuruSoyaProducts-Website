import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");

  const { cartItems, getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired options
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className='navbar' data-aos="fade-down">
      <Link to="/" onClick={() => setMenu("Home")}>
        <img src={assets.black_logo} alt="Logo" className="logo" />
      </Link>
      <div className="links">
        <ul className="navbar-menu">
          <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}><Link to="/">Home</Link></li>
          <li onClick={() => setMenu("About us")} className={menu === "About us" ? "active" : ""}><Link to="/aboutus">About us</Link></li>
          <li onClick={() => setMenu("Products")} className={menu === "Products" ? "active" : ""}><Link to="/products">Products</Link></li>
          <li onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}><Link to="/contactus">Contact us</Link></li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" className='search-icon' />
          <div className="navbar-search-icon">
            <Link to="/cart"><img src={assets.shopping_cart} alt="" /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          {!token ? <button onClick={() => setShowLogin(true)}>Sign In</button>
            : <div className='navbar-profile'>
                <img src={assets.profile_icon} alt="" />
                <ul className="nav-profile-dropdown">
                  <Link to='/orderpage'><img src={assets.bag_icon} alt="" /><p>Orders</p></Link>
                  <hr />
                  <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
              </div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
