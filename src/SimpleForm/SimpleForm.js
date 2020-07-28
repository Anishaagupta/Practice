import React, { useState } from 'react';

function SimpleForm(props) {
  const [user, setUser] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setUser({
      [e.target.name]: e.target.value,
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    if (user.name && user.email) {
      alert('Submitted');
    }
    setMessage('Enter values');
    return;
  };

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name='name'
          type='text'
          placeholder='name'
          value={user.name}
        />
        {/* <input
          oncCange={handleChange}
          name='email'
          type='email'
          placeholder='email'
          value={user.email}
        /> */}
        <button type='submit' name='submit' onClick={Submit}>
          Submit
        </button>
      </form>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{message}</p>
    </div>
  );
}

export default SimpleForm;
