import React, { useContext } from 'react';
import { FirstName, LastName, Age, Course } from '../App';

const CompA = () => {
  const fname = useContext(FirstName); //This is how useContext is used
  const lname = useContext(LastName);
  const age = useContext(Age);
  const course = useContext(Course);
  return (
    <div>
      <h1>
        My name is {fname}
        {lname}
      </h1>
      <h1>
        And my Age is {age} and course is {course}
      </h1>
    </div>
  );
};

export default CompA;
