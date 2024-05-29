import React from 'react'
import './ProductCatagory.css'
import { assets } from '../../assets/assets'

const ProductCatagory = () => {
  return (
    <div className='section_catag'>
      <div className="stack">
        <div className="card">
          <h1>ABC</h1>
        </div>
        <div className="card">
          <img src={assets.soyachunks} alt="" />
          <div className="shadow"></div>
        </div>
        <div className="card">
        <img src={assets.soyachunks} alt="" />
        <div className="shadow"></div>
        </div>
      </div>
      <div className="stack">
        <div className="card">
        <img src={assets.soyachunks} alt="" />
        <div className="shadow"></div>
        </div>
        <div className="card">
        <img src={assets.soyachunks} alt="" />
        <div className="shadow"></div>
        </div>
        <div className="card">
        <img src={assets.soyachunks} alt="" />
        <div className="shadow"></div>
        </div>
      </div>
    </div>
  )
}

export default ProductCatagory