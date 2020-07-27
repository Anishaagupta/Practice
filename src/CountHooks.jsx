import React, { useState } from 'react';
import Button from './Button';

function CountHooks() {
  let count = 0;
  const [currentCount, setCount] = useState(count);
  const Increment = () => {
    setCount(currentCount + 100);
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
      <button onClick={Increment}>'GetTime'</button>
      {/* <Button onClick={Increment} name='Increment' />
      <Button onClick={Decrement} name='Decrement' />
      <Button onClick={Multiply} name='Multiply' />
      <Button onClick={Divide} name='Divide' /> */}
    </div>
  );
}
export default CountHooks;
