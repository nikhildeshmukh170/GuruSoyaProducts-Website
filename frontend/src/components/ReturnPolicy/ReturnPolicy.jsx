import React from 'react';
import './ReturnPolicy.css';

const ReturnPolicy = () => {
  return (
    <div className="return-policy">
      <h2>Return Policy for Guru Soya Products</h2>
      <p>Your satisfaction is our priority at Guru Soya Products. We understand that sometimes returns may be necessary, and we want to ensure you have a clear understanding of our return policy regarding our soya products.</p>
      
      <div className="policy-details">
        <h3>General Return Policy</h3>
        <p>Due to the nature of our soya products, we prioritize the health and safety of our customers. Therefore, we do not accept returns on any products unless they meet the following criteria:</p>

        <h3>Conditions for Returns</h3>
        <ul>
          <li>The product must be unopened and in its original packaging.</li>
          <li>The return request must be initiated within 3 days of receiving the product.</li>
          <li>The product must have been received in damaged or defective condition, or if there was an error in your order.</li>
        </ul>

        <h3>Refunds and Exchanges</h3>
        <p>If your return is approved based on the above conditions, we will process your refund to the original method of payment or exchange it for a similar soya product, depending on your preference.</p>

        <h3>How to Initiate a Return</h3>
        <p>To initiate a return, please contact our customer service team via email at <a href="mailto:support@gurusoyaproducts.com">support@gurusoyaproducts.com</a> with your order number and the reason for the return. We will guide you through the process.</p>

        <h3>Important Notes</h3>
        <p>We cannot accept returns for:</p>
        <ul>
          <li>Opened or used soya products.</li>
          <li>Products purchased on sale or clearance.</li>
        </ul>
      </div>

      <p>Thank you for choosing Guru Soya Products! Your trust and satisfaction are important to us.</p>
    </div>
  );
};

export default ReturnPolicy;
