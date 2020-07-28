import React, { useContext, useState, useEffect } from 'react';
import { FirstName, LastName, Age, Course } from '../App';

const CompA = () => {
  const fname = useContext(FirstName); //This is how useContext is used
  const lname = useContext(LastName);
  const age = useContext(Age);
  const course = useContext(Course);
  const [num, setNum] = useState(0);
  useEffect(() => {
    //alert(`you clicked ${num} times`);
    document.title = `You clicked ${num} times`; // This func will run every time u click the click me button
  });
  return (
    <div>
      <h1>
        My name is {fname}
        {lname}
      </h1>
      <h1>
        And my Age is {age} and course is {course}
      </h1>
      <h2>{num}</h2>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default CompA;
