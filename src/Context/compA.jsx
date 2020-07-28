import React, { useContext } from 'react';
import { FirstName, LastName } from '../App';

const CompA = () => {
  const fname = useContext(FirstName); //This is how useContext is used
  const lname = useContext(LastName);
  return (
    <div>
      <h1>
        My name is {fname}
        {lname}
      </h1>
    </div>
  );
};

export default CompA;
