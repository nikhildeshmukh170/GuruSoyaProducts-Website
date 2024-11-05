import React, { useState } from 'react';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false); // Hide the success message after 3 seconds
    }, 3000);
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Fill out the form below.</p>
      <div className="content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <i className="fa fa-envelope contact-icon" aria-hidden="true"></i>
            <p>Email: <a href="mailto:info@gurusoya.com">info@gurusoya.com</a></p>
          </div>
          <div className="contact-item">
            <i className="fa fa-phone contact-icon" aria-hidden="true"></i>
            <p>Phone: <a href="tel:+911234567890">+91-1234567890</a></p>
          </div>
          <div className="contact-item">
            <i className="fa fa-map-marker contact-icon" aria-hidden="true"></i>
            <p>Address: 123 Soya Lane, Greater Noida, India</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
      {showSuccess && <div className="success-message">✅ Your message has been sent successfully!</div>}
    </div>
  );
};

export default ContactUs;
