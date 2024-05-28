import React from 'react'
import "./ProductCatagory.css"
import { assets } from '../../assets/assets'

const ProductCatagory = () => {
  return (
    <div className='Section_Catagory'>
      <div className="stack">
        <div className="heading">
          <div className="heading_main">
            <h1>OUR PRODUCT CATEGORIES</h1>
            <p>Indulge your taste buds with our delightful treats.</p>
          </div>
          <p>Experience a world of soy-based delights with Guru Soya Product. Our range offers wholesome snacks and nutritious ingredients to suit every taste bud. Dive in and savor the goodness of soy in every bite.</p>
        </div>
        <div className="stackup">
          <div className="card">
            <p>Soya Chunks</p>
            <div className="bg_img">
              <img src={assets.soyachunks} alt="" />
              <div className="shadow">
              </div>
            </div>
          </div>
          <div className="card">ABC</div>
        </div>
      </div>
      <div className="stack">ABC</div>
    </div>
  )
}

export default ProductCatagory