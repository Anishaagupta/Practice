import React from 'react';
import Hooks from './Hooks';
import CountHooks from './CountHooks';
import DigitalClock from './DigitalClock';
import New from './NewComp/Index';

import './App.css';
import State from './StateComponent/Index';

function App() {
  return (
    <div className='App'>
      <Hooks />
      <CountHooks />
      <DigitalClock />
      <State>
        <h1>Name : I am Anisha</h1>
        <h1>RollNumber : 01</h1>
      </State>
      <New />
    </div>
  );
}

export default App;
