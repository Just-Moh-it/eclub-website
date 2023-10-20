// components/CountdownTimer.js
'use client'
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      let now = new Date();
      let eventDate = new Date('2023-11-05T23:59:00'); // November 5th 11:59pm

      let diff = eventDate - now;

      const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: daysLeft,
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft,
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='alert lg:w-3/4 mt-4'>
      <span className='text-xl text-error font-bold'>{timeLeft.days} days </span>
      <span className='text-xl text-error font-bold'>{timeLeft.hours} hours </span>
      <span className='text-xl text-error font-bold'>{timeLeft.minutes} minutes </span>
      <span className='text-xl text-error font-bold'>{timeLeft.seconds} seconds </span>
      <span className='text-xl font-bold'>left to apply</span>
    </div>
  );
};

export default CountdownTimer;
