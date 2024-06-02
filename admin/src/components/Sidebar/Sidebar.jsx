import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img className="wh_icon"src={assets.wh_add} alt="" />
                <img className="bl_icon" src={assets.add_icon} alt="" />
                <p>Add Products</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <img className="wh_icon" src={assets.wh_list} alt="" />
                <img className="bl_icon" src={assets.bl_list} alt="" />
                <p>List Products</p>
            </NavLink>
            <NavLink to='/order' className="sidebar-option">
                <img className="wh_icon" src={assets.wh_order} alt="" />
                <img className="bl_icon" src={assets.bl_order} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar