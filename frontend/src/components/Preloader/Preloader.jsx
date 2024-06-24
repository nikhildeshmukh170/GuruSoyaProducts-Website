import React from 'react';
import './Preloader.css';
import { assets } from '../../assets/assets';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="logo">
        <img src={assets.black_logo} alt="" />
      </div>
      <div className='dots'>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Preloader;
