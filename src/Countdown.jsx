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

  const padZero = (num) => (num < 10 ? `0${num}` : num);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setCurrentDate(new Date().toLocaleDateString());
    }, 1);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`countdown`}>
      <h1 className="title">2026 카운트 다운</h1>
      <div className="time-container">
        <div className="time-box">
          <span className="time">{padZero(timeLeft.days)}</span>
          <span className="label">일</span>
        </div>
        <div className="time-box">
          <span className="time">{padZero(timeLeft.hours)}</span>
          <span className="label">시간</span>
        </div>
        <div className="time-box">
          <span className="time">{padZero(timeLeft.minutes)}</span>
          <span className="label">분</span>
        </div>
        <div className="time-box">
          <span className="time">{padZero(timeLeft.seconds)}</span>
          <span className="label">초</span>
        </div>
        <div className="time-box">
          <span className="time">{padZero(timeLeft.milliseconds)}</span>
          <span className="label">밀리초</span>
        </div>
      </div>

      <div className="current-date">
        <p>오늘: {currentDate}</p>
      </div>

      <div className="github-link">
        <a href="https://github.com/tpgusgh" target="_blank" rel="noopener noreferrer">
          <button className="github-button">
            <img className="imgsize" src="/github-mark.svg" alt="GitHub" />
            ⠀⠀⠀Go to My GitHub
          </button>
        </a>
      </div>
    </div>
  );
};

export default Countdown;
