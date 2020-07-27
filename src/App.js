import React from 'react';
import Hooks from './Hooks';
import CountHooks from './CountHooks';
import DigitalClock from './DigitalClock';

import './App.css';
import State from './StateComponent/Index';

function App() {
  return (
    <div className='App'>
      <Hooks />
      <CountHooks />
      <DigitalClock />
      <State>I am Anisha {2}</State>
    </div>
  );
}

export default App;
