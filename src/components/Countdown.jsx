import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const targetDate = new Date('2025-04-29T00:00:00+05:30');

    const updateCountdown = () => {
      const now = new Date();
      const utcNow = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istNow = new Date(utcNow + (5.5 * 60 * 60 * 1000));

      const timeDifference = targetDate - istNow;

      if (timeDifference <= 0) {
        navigate('/birthday');
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, [navigate]);

  const formatTimeUnit = (unit) => String(unit).padStart(2, '0');

  return (
    <div className="countdown-screen">
      {/* Decorative stickers */}
      <img src="/images/bg1.png" alt="Decor1" className="decor decor1" />
      <img src="/images/bg2.png" alt="Decor2" className="decor decor2" />
      <img src="/images/bg3.png" alt="Decor3" className="decor decor3" />
      <img src="/images/bg4.png" alt="Decor4" className="decor decor4" />
      <img src="/images/bg5.png" alt="Decor5" className="decor decor5" />
      <img src="/images/bg6.png" alt="Decor6" className="decor decor6" />
      {/* <img src="/images/tv-frame.png" alt="tv-frame" className="tv frame" /> */}

      {/* Barbie TV frame */}
      <div className="tv-frame">
        {timeLeft ? (
          <h1 className="countdown-text">
            <br />
            <span className="countdown-text-1">Time Left <br/> for Becca's birthday  </span>
            <br />
            {formatTimeUnit(timeLeft.hours)}h : {formatTimeUnit(timeLeft.minutes)}m : {formatTimeUnit(timeLeft.seconds)}s
          </h1>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Countdown;
