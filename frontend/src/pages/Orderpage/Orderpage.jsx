import React from 'react';
import { useLocation } from 'react-router-dom';
import './Orderpage.css';

const Orderpage = () => {
  const location = useLocation();
  const { order } = location.state || {};  // Retrieve the order data passed from PaymentSuccess component

  if (!order) {
    return <div>No order data available.</div>;
  }

  return (
    <div className="order-page">
      <h1>Order Details</h1>
      <div className="order-details">
        <p><strong>Order ID:</strong> {order._id}</p>
        <p><strong>Customer:</strong> {order.customer.name}</p>
        <p><strong>Address:</strong> {order.address.street}, {order.address.city}, {order.address.state} - {order.address.zipCode}</p>
        <p><strong>Payment ID:</strong> {order.paymentId}</p>

        <h2>Ordered Items</h2>
        <ul>
          {order.items.map((item, index) => (
            <li key={index}>
              <p>{item.name} - {item.quantity} x ₹{item.price}</p>
            </li>
          ))}
        </ul>

        <div className="order-total">
          <p><strong>Total:</strong> ₹{order.totalAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default Orderpage;
