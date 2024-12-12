// AdminLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import logo from "../../assets/logo.png"
import { members } from "../../Data/membersData";

const AdminLogin = ({ setIsAuthenticated }) => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCredentials({ ...credentials, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!credentials.username || !credentials.password) {
        toast.error("Please fill in all fields.");
        return;
      }
  
      const isValidUser = members.some(
        (member) =>
          member.username === credentials.username &&
          member.password === credentials.password
      );
  
      if (isValidUser) {
        toast.success("Welcome to Guru Soya Admin Dashboard!");
        // Save authentication state to localStorage
        localStorage.setItem("isAuthenticated", "true");

        setIsAuthenticated(true);
        navigate("/dashboard");
      } else {
        toast.error("Invalid username or password.");
      }
    };

  return (
    <div className="login-container">
      {/* Decorative Circles */}
      <div className="decorative-circle circle-green"></div>
      <div className="decorative-circle circle-yellow"></div>

      {/* Logo */}
      <div className="logo">
        <img
          src={logo}
          alt="Guru Soya products Logo"
        />
        <h1>Guru Soya Products Admin</h1>
      </div>

      {/* Login Card */}
      <div className="login-card">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>

      {/* Footer */}
      <p className="footer">
        <p>© {new Date().getFullYear()} Guru Soya Products. All rights reserved.</p>
      </p>

      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
