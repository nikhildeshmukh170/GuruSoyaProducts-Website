import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import AdminHome from './pages/AdminHome/AdminHome'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from './pages/login/login'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isAuthenticated]);

  const url = "https://gurusoyaproducts-website.onrender.com";

  return (
    <div>
      {!isAuthenticated && <AdminLogin setIsAuthenticated={setIsAuthenticated} />}
      {isAuthenticated && (
        <div>
          <ToastContainer />
          <Navbar />
          <hr />
          <div className="app-content">
            <Sidebar />
            <Routes>
              <Route path="/dashboard" element={<AdminHome />} />
              <Route path="/add" element={<Add url={url} />} />
              <Route path="/list" element={<List url={url} />} />
              <Route path="/order" element={<Orders url={url} />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
