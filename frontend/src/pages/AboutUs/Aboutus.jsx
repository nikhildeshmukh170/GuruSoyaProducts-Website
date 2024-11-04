import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: 'Sadhana Deshmukh',
      position: 'Founder',
      quote: 'Quality is the heart of our business.',
      image: '/images/sadhana.jpg',
      details: 'With a passion for nutrition and healthy living, Sadhana started Guru Soya Products to provide nutritious alternatives to traditional food sources. Her commitment to quality has driven the company\'s vision for over two decades, ensuring that every product reflects the core values of health and sustainability.'
    },
    {
      name: 'Dipak Deshmukh',
      position: 'CEO',
      quote: 'Innovation is key to our growth.',
      image: '/images/dipak.jpg',
      details: 'Dipak brings over 15 years of experience in the food industry. Under his leadership, the company has grown significantly and has been recognized for its innovation and commitment to health. He focuses on strategic planning and operational excellence to keep Guru Soya Products at the forefront of the industry.'
    },
    {
      name: 'Nikhil Deshmukh',
      position: 'Tech Head',
      quote: 'Technology drives our efficiency.',
      image: '/images/nikhil.jpg',
      details: 'A tech enthusiast and expert in modern food manufacturing technologies, Nikhil focuses on integrating cutting-edge solutions into production processes. His work ensures that Guru Soya Products maintains high standards of quality while optimizing operations for sustainability and efficiency.'
    },
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="about-us">
      <div className="hero-section">
        <h1>Welcome to Guru Soya Products</h1>
        <p>Where Health Meets Innovation</p>
        <button onClick={() => window.scrollTo(0, document.querySelector('.journey-section').offsetTop)}>Discover Our Journey</button>
      </div>

      <div className="journey-section">
        <h2 className="section-title">Our Journey</h2>
        <p>
          Since our inception in 2014, Guru Soya Products has been dedicated to providing high-quality soy-based products that promote health and wellness. Our commitment to sustainability and innovation has positioned us as a trusted brand in the food manufacturing industry.
        </p>
        <div className="history-timeline">
          <div className="timeline-event">
            <h3 className="event-year">2014</h3>
            <p className="event-description">Founded with a vision to promote healthy living through soy.</p>
          </div>
          <div className="timeline-event">
            <h3 className="event-year">2015</h3>
            <p className="event-description">Launched our first range of soy products, receiving positive customer feedback.</p>
          </div>
          <div className="timeline-event">
            <h3 className="event-year">2018</h3>
            <p className="event-description">Expanded our product line to include innovative health-focused soy options.</p>
          </div>
          <div className="timeline-event">
            <h3 className="event-year">2023</h3>
            <p className="event-description">Became a trusted brand in the soy industry, known for quality and sustainability.</p>
          </div>
        </div>
      </div>

      <div className="vision-section">
        <h2 className="section-title">Our Vision & Mission</h2>
        <p>
          We strive to be the leading provider of high-quality soy products, dedicated to improving health and wellness while promoting sustainable practices in our production processes.
        </p>
      </div>

      <div className="values-section">
        <h2 className="section-title">Our Values</h2>
        <div className="values-list">
          <div className="value-item">🌱 Sustainability</div>
          <div className="value-item">❤️ Quality</div>
          <div className="value-item">🤝 Community</div>
          <div className="value-item">🥇 Innovation</div>
        </div>
      </div>

      <div className="team-section">
        <h2 className="section-title">Meet Our Founders</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index} onClick={() => handleMemberClick(member)}>
              <div className="member-card">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="member-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.position}</p>
                  <p className="team-quote">"{member.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedMember.image} alt={selectedMember.name} className="modal-image" />
            <h3>{selectedMember.name}</h3>
            <p className="modal-role">{selectedMember.position}</p>
            <p className="modal-details">{selectedMember.details}</p>
            <button className="modal-close" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}

      <div className="future-section">
        <h2 className="section-title">Our Future</h2>
        <p>
          We are committed to continuous improvement and innovation. Our goal is to expand our product offerings while maintaining the highest standards of quality and sustainability. We aim to educate consumers on the benefits of soy and lead the market in healthy alternatives.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
