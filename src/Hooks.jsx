import React, { useState } from 'react'; // necessary to import useState
import Button from './Button';

function Hooks() {
  let newTime = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(newTime); // this line is necessary to write here bcaoz it is used to define hooks
  // always use hooks in/under a function component
  const toGetTime = () => {
    let currentTime = new Date().toLocaleTimeString();
    setCurrentTime(currentTime); //to set updated value of time
  };
  return (
    <div>
      <h1>{currentTime}</h1>
      <button onClick={toGetTime}>'GetTime'</button>
      <Button onClick={toGetTime} name='GetTime' />
    </div>
  );
}

export default Hooks;
