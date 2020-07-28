import React, { createContext } from 'react';
// import Hooks from './Hooks';
// import CountHooks from './CountHooks';
// import DigitalClock from './DigitalClock';
// import New from './NewComp/Index';
// import './App.css';
// import State from './StateComponent/Index';
// import Form from './SimpleForm/Index';
import CompA from './Context/Index';

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <div className='App'>
      {/* <Hooks />
      <CountHooks />
      <DigitalClock />
      <State>
        <h1>Name : I am Anisha</h1>
        <h1>RollNumber : 01</h1>
      </State>
      <New />
      <Form /> */}
      <FirstName.Provider value='Anisha'>
        {/**This is how useContext is used */}
        <LastName.Provider value='Gupta'>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export { FirstName, LastName };
