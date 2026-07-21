import { useState, useEffect } from "react";

function CleanupFunc() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Timer Started");
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("Timer Stopped");
    };
  }, []);
  return (
    <div>
      <h2>Cleanup Function Example</h2>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default CleanupFunc;