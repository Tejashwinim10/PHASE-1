import { useEffect } from 'react';
import '../index.css';

const TimerLogger = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("⏰ Timer: Logging every second...");
    }, 1000);

    // Cleanup
    return () => {
      console.log("🧹 Cleanup: Timer stopped.");
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="timer-box">
      <h2>Timer Running...</h2>
      <p>Open your console to see the timer logs every second.</p>
    </div>
  );
};

export default TimerLogger;
