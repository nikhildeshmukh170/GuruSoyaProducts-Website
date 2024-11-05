import React, { useState } from 'react';
import './ContactUs.css';
import { ReactComponent as Blob } from './blob.svg'; // Import an SVG blob shape

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="crazy-contact-us">
      <div className="header">
        <h2>🌟 Let's Connect!</h2>
        <p>Your feedback fuels our passion for soy!</p>
      </div>
      <div className="content">
        <div className="contact-info">
          <h3>📞 We'd Love to Hear From You!</h3>
          <p><strong>Email:</strong> info@gurusoya.com</p>
          <p><strong>Phone:</strong> +91-1234567890</p>
          <p><strong>Address:</strong> 123 Soya Lane, Greater Noida, India</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">👤 Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">📧 Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">✉️ Your Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            />
          </div>
          <button type="submit" className="submit-button">Send It! 🚀</button>
        </form>
      </div>
      <Blob className="blob" />
    </div>
  );
};

export default ContactUs;
