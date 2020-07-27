import React from 'react';
import Hooks from './Hooks';
import CountHooks from './CountHooks';
import DigitalClock from './DigitalClock';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Hooks />
      <CountHooks />
      <DigitalClock />
    </div>
  );
}

export default App;
