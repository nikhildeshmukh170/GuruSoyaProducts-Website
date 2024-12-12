import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { paymentId } = location.state || {};  // Access payment ID passed from PlaceOrder component
  const [orderData, setOrderData] = useState(null);

  // Fetch order data using the paymentId or store order data after successful payment
  useEffect(() => {
    if (paymentId) {
      const fetchOrderData = async () => {
        try {
          // Make an API call to get the order details using paymentId
          const response = await axios.post('/api/order/get', { paymentId });
          setOrderData(response.data);  // Store the fetched order data
        } catch (error) {
          console.error("Error fetching order data:", error);
        }
      };

      fetchOrderData();
    }
  }, [paymentId]);

  const navigateToOrderPage = () => {
    if (orderData) {
      navigate('/order-page', { state: { order: orderData } });
    }
  };

  return (
    <div className="payment-success">
      <h1>Payment Successful!</h1>
      {paymentId && <p>Payment ID: {paymentId}</p>}
      {orderData ? (
        <>
          <p>Your order has been successfully placed!</p>
          <button onClick={navigateToOrderPage}>View Order</button>
        </>
      ) : (
        <p>Fetching your order details...</p>
      )}
    </div>
  );
};

export default PaymentSuccess;
