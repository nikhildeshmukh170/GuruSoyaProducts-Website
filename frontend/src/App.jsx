import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Lazy load components for better performance
const Home = React.lazy(() => import("./pages/Home/Home"));
const Cart = React.lazy(() => import("./pages/Cart/Cart"));
const PlaceOrder = React.lazy(() => import("./pages/PlaceOrder/PlaceOrder"));
const Aboutus = React.lazy(() => import("./pages/AboutUs/Aboutus"));
const Products = React.lazy(() => import("./pages/Products/Products"));
const ContactUs = React.lazy(() => import("./pages/ContactUs/ContactUs"));
const PaymentSuccess = React.lazy(() =>
  import("./pages/PaymentSuccess/PaymentSuccess")
);
const ProductDetail = React.lazy(() =>
  import("./components/ProductDetail/ProductDetail")
);
const Faqs = React.lazy(() => import("./components/Faqs/Faqs"));
const ShippingInfo = React.lazy(() =>
  import("./components/ShippingInfo/ShippingInfo")
);
const ReturnPolicy = React.lazy(() =>
  import("./components/ReturnPolicy/ReturnPolicy")
);
const PrivacyPolicy = React.lazy(() =>
  import("./components/PrivacyPolicy/PrivacyPolicy")
);
const Orderpage = React.lazy(() => import("./pages/Orderpage/Orderpage"));
const Login = React.lazy(() => import("./components/Login/Login"));

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate a network request or heavy task
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Update document title based on route
    const titles = {
      "/": "Home - Guru Soya Products",
      "/cart": "Cart - Guru Soya Products",
      "/order": "Order - Guru Soya Products",
      "/aboutus": "About Us - Guru Soya Products",
      "/products": "Products - Guru Soya Products",
      "/contactus": "Contact Us - Guru Soya Products",
      "/place-order": "Place Order - Guru Soya Products",
      "/payment-success": "Payment Success - Guru Soya Products",
      "/faq": "FAQs - Guru Soya Products",
      "/shipping": "Shipping Info - Guru Soya Products",
      "/returns": "Return Policy - Guru Soya Products",
      "/privacy": "Privacy Policy - Guru Soya Products",
    };
    document.title = titles[location.pathname] || "Guru Soya Products";
  }, [location.pathname]);

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
              <React.Suspense fallback={<Preloader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/order" element={<PlaceOrder />} />
                  <Route path="/aboutus" element={<Aboutus />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/contactus" element={<ContactUs />} />
                  <Route path="/place-order" element={<PlaceOrder />} />
                  <Route path="/payment-success" element={<PaymentSuccess />} />
                  <Route path="/orderpage" element={<Orderpage />} />
                  <Route
                    path="/product/:productId"
                    element={<ProductDetail />}
                  />
                  <Route path="/faq" element={<Faqs />} />
                  <Route path="/shipping" element={<ShippingInfo />} />
                  <Route path="/returns" element={<ReturnPolicy />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
              </React.Suspense>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;
