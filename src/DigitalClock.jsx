import React, { useState } from 'react';

function DigitalClock() {
  let time = new Date().toLocaleTimeString();
  const [cTime, setTime] = useState(time);
  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div>
      <h1>{cTime}</h1>
    </div>
  );
}

export default DigitalClock;
