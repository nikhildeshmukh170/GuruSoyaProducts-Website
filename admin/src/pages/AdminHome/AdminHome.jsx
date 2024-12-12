import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import "./AdminHome.css";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const AdminHome = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Monthly Sales",
        backgroundColor: "#ff9800",
        data: [300, 500, 450, 600, 750],
      },
    ],
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <h2 className="header">E-commerce Admin Dashboard</h2>

      {/* Current Date and Time */}
      <div className="date-time">
        <span>{currentTime.toLocaleDateString()}</span>
        <span>{currentTime.toLocaleTimeString()}</span>
      </div>

      {/* Main Container */}
      <div className="content">
        {/* Sidebar */}

        {/* Main Content */}
        <div className="main-content">
          {/* Summary Widgets */}
          <div className="summary-widgets">
            {[
              { title: "Total Products", value: 1500 },
              { title: "Total Orders", value: 750 },
              { title: "Total Revenue", value: "$500K" },
              { title: "Active Customers", value: 3200 },
            ].map((item, index) => (
              <div key={index} className="widget">
                <h4>{item.title}</h4>
                <p>{item.value}</p>
              </div>
            ))}
          </div>

          {/* Sales Analytics Chart */}
          <div className="chart-container">
            <h3>Monthly Sales Analytics</h3>
            <div className="chart">
              <Bar data={data} />
            </div>
          </div>

          {/* Notifications */}
          <div className="notifications">
            {[
              { title: "New Order Received", details: "Order ID: #4567" },
              { title: "Stock Running Low", details: "Product ID: 1234" },
              { title: "Customer Feedback", details: "Rating: ⭐⭐⭐⭐⭐" },
            ].map((notif, index) => (
              <div key={index} className="notification-card">
                <p>{notif.title}</p>
                <span>{notif.details}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 E-commerce Dashboard. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AdminHome;
