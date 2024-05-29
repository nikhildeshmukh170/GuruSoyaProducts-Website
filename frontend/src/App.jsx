import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Aboutus from './pages/AboutUs/Aboutus'
import Products from './pages/Products/Products'
import ContactUs from './pages/ContactUs/ContactUs'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App