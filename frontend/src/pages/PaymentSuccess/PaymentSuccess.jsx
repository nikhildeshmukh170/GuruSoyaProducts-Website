import React from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
  const location = useLocation();
  const { paymentId, orderId } = {}; // Access passed state

  return (
    <div className="payment-success">
      <h1>Payment Successful!</h1>
      {paymentId && <p>Payment ID: {paymentId}</p>}
      {/* {orderId && <p>Order ID: {orderId}</p>} */}
      <p>Thank you for your order.</p>
    </div>
  );
};

export default PaymentSuccess;
