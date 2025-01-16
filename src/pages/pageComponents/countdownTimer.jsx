import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Set the target date (replace with your desired date)
  const targetDate = new Date('2026-01-31T00:00:00');  // Example: January 31, 2025

  // State to hold the time difference
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    // Function to calculate time difference
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Update the countdown every second
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      <div>
        {timeLeft.days !== undefined ? (
          <p>
            {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;