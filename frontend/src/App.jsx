import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Aboutus from "./pages/AboutUs/Aboutus";
import Products from "./pages/Products/Products";
import ContactUs from "./pages/ContactUs/ContactUs";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Faqs from "./components/Faqs/Faqs";
import ShippingInfo from "./components/ShippingInfo/ShippingInfo";
import ReturnPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Orderpage from "./pages/Orderpage/Orderpage";
import Login from "./components/Login/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  const getTitleAndMeta = (title, description) => (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Guru Soya Products, soy products, healthy soy goods, plant-based nutrition, soy flour, soy milk, soy protein, organic soy products, tofu, soy snacks, soy cookies, soy café nutrient, soy roasted namkeen, vegan products, soy tofu, soy chips, soy health, plant-based food, soy protein bars, healthy plant products, soy energy, soy healthy lifestyle, soy nutrition, soy organic goods, soy grains, soybeans"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://gurusoyaproducts.com${location.pathname}`} />
        
        {/* Open Graph Metadata */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://gurusoyaproducts.com${location.pathname}`} />
        <meta property="og:image" content="https://gurusoyaproducts.com/logo.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://gurusoyaproducts.com/logo.png" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Guru Soya Products",
              "url": "https://gurusoyaproducts.com",
              "logo": "https://gurusoyaproducts.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/GuruSoyaProducts",
                "https://twitter.com/GuruSoyaProducts",
                "https://www.instagram.com/GuruSoyaProducts"
              ]
            })
          }}
        />
      </Helmet>
    </>
  );

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const closePopup = () => setShowPopup(false);

  return (
    <HelmetProvider>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {showLogin && <Login setShowLogin={setShowLogin} />}
          <Navbar setShowLogin={setShowLogin} />
          <div className="maincontent">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {getTitleAndMeta("Home | Guru Soya Products", "Discover premium, nutritious soy products for a healthy lifestyle.")}
                    <Home />
                  </>
                }
              />
              <Route
                path="/cart"
                element={
                  <>
                    {getTitleAndMeta("Cart | Guru Soya Products", "Review your cart and checkout effortlessly.")}
                    <Cart />
                  </>
                }
              />
              <Route
                path="/products"
                element={
                  <>
                    {getTitleAndMeta("Products | Guru Soya Products", "Explore a variety of soy-based products, tofu, soy flour, vegan snacks, and plant-based goods.")}
                    <Products />
                  </>
                }
              />
              <Route
                path="/aboutus"
                element={
                  <>
                    {getTitleAndMeta("About Us | Guru Soya Products", "Learn about our mission to bring healthy, organic soy products to your lifestyle.")}
                    <Aboutus />
                  </>
                }
              />
              <Route path="/faq" element={<Faqs />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/shipping" element={<ShippingInfo />} />
              <Route path="/returns" element={<ReturnPolicy />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/orderpage" element={<Orderpage />} />
            </Routes>
          </div>

          <Footer />
        </>
      )}
    </HelmetProvider>
  );
};

export default App;
