import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/adminlogin');
  };

  return (
    <div className="navbar">
      <NavLink to='/dashboard' className="logo">
        <img src={assets.wh_logo} alt="Logo" />
      </NavLink>

      <div className="nav-links">
        <NavLink to="/dashboard" className="nav-link">Home</NavLink>
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
        <NavLink to="/settings" className="nav-link">Settings</NavLink>
        
        {/* Logout Button */}
        <button className="nav-link logout-btn" onClick={handleLogout}>
          Logout
        </button>

        <img src={assets.profile_image} alt="Profile" className="profile-img" />
      </div>
    </div>
  );
};

export default Navbar;
