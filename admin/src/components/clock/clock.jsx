import React, { useState, useEffect } from 'react';
import './clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div className="clock">
      <h2><p>Time: </p>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
