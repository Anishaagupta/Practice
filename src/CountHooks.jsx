import React, { useState } from 'react';

function CountHooks() {
  let count = 0;
  const [currentCount, setCount] = useState(count);
  const Increment = () => {
    setCount(currentCount + 1);
  };
  const Decrement = () => {
    setCount(currentCount - 1);
  };
  const Multiply = () => {
    setCount(currentCount * 5);
  };
  const Divide = () => {
    setCount(Math.floor(currentCount / 10));
  };
  return (
    <div>
      <h1>{currentCount}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Multiply}>Multiply</button>
      <button onClick={Divide}>Divide</button>
    </div>
  );
}

export default CountHooks;
