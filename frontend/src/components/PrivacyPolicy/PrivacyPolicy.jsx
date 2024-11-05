import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h2>Privacy Policy for Guru Soya Products</h2>
      <p>At Guru Soya Products, your privacy is of utmost importance to us. This policy outlines how we collect, use, and protect your personal information when you visit our website and make purchases.</p>

      <div className="policy-details">
        <h3>Information We Collect</h3>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal Identification Information: Name, email address, phone number, and shipping address.</li>
          <li>Payment Information: Credit card details and billing address, processed securely through our payment gateway.</li>
          <li>Usage Data: Information on how you interact with our website, including IP address, browser type, and pages visited.</li>
        </ul>

        <h3>How We Use Your Information</h3>
        <p>We use the information we collect for various purposes, including:</p>
        <ul>
          <li>To process and fulfill your orders.</li>
          <li>To communicate with you about your orders and provide customer support.</li>
          <li>To improve our website, products, and services based on user feedback.</li>
          <li>To send you promotional emails about new products, offers, and updates, if you opt-in.</li>
        </ul>

        <h3>Data Security</h3>
        <p>We take the security of your personal information seriously. We implement appropriate technical and organizational measures to protect your data against unauthorized access, disclosure, alteration, or destruction.</p>

        <h3>Sharing Your Information</h3>
        <p>We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except for:</p>
        <ul>
          <li>Third-party service providers who assist us in operating our website and conducting our business (e.g., payment processors, delivery services).</li>
          <li>Law enforcement agencies, if required by law or to protect our rights.</li>
        </ul>

        <h3>Your Rights</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of any inaccurate data.</li>
          <li>Request deletion of your personal information, subject to certain legal exceptions.</li>
        </ul>

        <h3>Changes to This Privacy Policy</h3>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website. We encourage you to review this policy periodically for any updates.</p>

        <h3>Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@gurusoyaproducts.com">support@gurusoyaproducts.com</a>.</p>
      </div>
      
      <p>Thank you for trusting Guru Soya Products with your personal information.</p>
    </div>
  );
};

export default PrivacyPolicy;
