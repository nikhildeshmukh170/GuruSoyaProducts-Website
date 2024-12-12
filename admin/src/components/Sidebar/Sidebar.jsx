import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Guru Soya Admin</h2>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="Add" className="icon" />
          <span>Add Products</span>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <img src={assets.bl_list} alt="List" className="icon" />
          <span>List Products</span>
        </NavLink>
        <NavLink to='/order' className="sidebar-option">
          <img src={assets.bl_order} alt="Orders" className="icon" />
          <span>Orders</span>
        </NavLink>
        <NavLink to='/analytics' className="sidebar-option">
          <img src={assets.analytics_icon} alt="Analytics" className="icon" />
          <span>Analytics</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
