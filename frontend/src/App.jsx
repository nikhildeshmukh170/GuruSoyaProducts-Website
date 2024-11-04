import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Aboutus from "./pages/AboutUs/Aboutus";
import Products from "./pages/Products/Products";
import ContactUs from "./pages/ContactUs/ContactUs";
import Login from "./components/Login/Login";
import Preloader from './components/Preloader/Preloader';
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import '@fortawesome/fontawesome-free/css/all.min.css';

// import './App.css'; // Assuming you have some global styles

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or heavy task
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {showLogin && <Login setShowLogin={setShowLogin} />}
          <div className="app">
            <Navbar setShowLogin={setShowLogin} />
            <div className="maincontent">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order" element={<PlaceOrder />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;
