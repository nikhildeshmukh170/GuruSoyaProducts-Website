import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <NavLink to='/'>
            <img className='logo' src={assets.wh_logo} alt="" />
        </NavLink>
        <div className="rightside">
            <NavLink to='/'><p>Home</p></NavLink>
            <img className='profile' src={assets.profile_image} alt="" />
        </div>
    </div>
  )
}

export default Navbar