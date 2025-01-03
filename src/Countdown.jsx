import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-01-01T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    const milliseconds = Math.floor((difference % 1000) / 10);

    return { days, hours, minutes, seconds, milliseconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setCurrentDate(new Date().toLocaleDateString()); // Update date every day
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <h1 className="title">Countdown to 2026</h1>
      <div className="time-container">
        <div className="time-box">
          <span className="time">{timeLeft.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-box">
          <span className="time">{timeLeft.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-box">
          <span className="time">{timeLeft.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-box">
          <span className="time">{timeLeft.seconds}</span>
          <span className="label">Seconds</span>
        </div>
        <div className="time-box">
          <span className="time">{timeLeft.milliseconds}</span>
          <span className="label">Milliseconds</span>
        </div>
      </div>

      <div className="current-date">
        <p>Today's Date: {currentDate}</p>
      </div>

      <div className="github-link">
        <a href="https://github.com/tpgusgh" target="_blank" rel="noopener noreferrer">
          <button className="github-button"><img className="imgsize" src="/github-mark.svg" /> Go to My GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default Countdown;
