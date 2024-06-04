import React, { useState, useEffect } from 'react';
import './AdminHome.css';
import Clock from '../../components/clock/clock';

const AdminHome = () => {
  const [greeting, setGreeting] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const currentHour = now.getHours();
      let greetingText;
      let bgColor;
      let pTextColor;

      if (currentHour >= 4 && currentHour < 12) {
        greetingText = 'GOOD MORNING,';
        bgColor = '#FFFAF0'; // Light color for morning
        pTextColor = '#333'; // Dark color for morning
      } else if (currentHour >= 12 && currentHour < 16) {
        greetingText = 'GOOD AFTERNOON,';
        bgColor = '#FFFACD'; // Light golden color for afternoon
        pTextColor = '#333'; // Dark color for afternoon
      } else if (currentHour >= 16 && currentHour < 20) {
        greetingText = 'GOOD EVENING,';
        bgColor = '#FFD700'; // Golden color for evening
        pTextColor = '#333'; // Dark color for evening
      } else {
        greetingText = 'GOOD NIGHT,';
        bgColor = '#2F4F4F'; // Dark slate gray color for night
        pTextColor = '#FFF'; // Light color for night
      }

      setGreeting(greetingText);
      setBackgroundColor(bgColor);
      setTextColor(pTextColor);
      setCurrentDate(now.toDateString());
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);


  // clock 

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div className="Adminhome" style={{ backgroundColor: backgroundColor }}>
        <div className="date-time">
            <p style={{ color: textColor }}>{currentDate}</p>
            <div className="clock">
                <h2 style={{ color: textColor }}><p style={{ color: textColor }}>Time: </p>{time.toLocaleTimeString()}</h2>
            </div>
        </div>
        <div className="content">
            <h1>{greeting}</h1>
            <p style={{ color: textColor }}>Your efforts make a difference. Here's to another successful day at Guru Soya Products!</p>
            <p style={{ color: textColor }}>***</p>
        </div>
      
    </div>
  );
};

export default AdminHome;
