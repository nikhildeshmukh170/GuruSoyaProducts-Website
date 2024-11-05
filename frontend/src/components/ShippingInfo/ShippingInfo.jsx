import React from 'react';
import './ShippingInfo.css';

const ShippingInfo = () => {
  return (
    <div className="shipping-info">
      <h2>Shipping Information</h2>
      <p>At Guru Soya Products, we aim to deliver your products as quickly and efficiently as possible.</p>
      
      <div className="shipping-details">
        <h3>Delivery Partner</h3>
        <p>Our delivery partner is <strong>Delivery</strong>, ensuring timely and reliable service.</p>

        <h3>Shipping Times</h3>
        <p>Standard delivery typically takes 3-5 business days.</p>

        <h3>Shipping Costs</h3>
        <p>Shipping is free for orders over ₹500. For orders under this amount, a flat fee of ₹50 will apply.</p>

        <h3>Delivery Areas</h3>
        <p>We deliver to all major cities and towns across India. For a list of specific areas, please check our delivery policy.</p>

        <h3>Tracking Your Order</h3>
        <p>Once your order has been shipped, you will receive a tracking link via email to monitor its status.</p>

        <h3>Returns and Exchanges</h3>
        <p>If you're not satisfied with your order, you can initiate a return or exchange within 7 days of receiving your product. Please visit our Returns page for more details.</p>

        <h3>Customer Support</h3>
        <p>If you have any questions or need assistance, feel free to contact our customer service team via email or phone.</p>
      </div>

      <p>
        For more information, visit our <a href="/faq">FAQ page</a> or contact us at <a href="mailto:support@gurusoyaproducts.com">support@gurusoyaproducts.com</a>.
      </p>
    </div>
  );
};

export default ShippingInfo;
