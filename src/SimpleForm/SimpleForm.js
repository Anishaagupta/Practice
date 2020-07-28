import React, { useState } from 'react';

function SimpleForm() {
  const [user, setUser] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    if (user.name && user.email) {
      alert('Submitted');
    } else {
      setMessage('Enter values');
    }
    return;
  };

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          //   onChange={(e) => {
          //     setUser({ ...user, name: e.target.value });
          //   }}
          name='name'
          type='text'
          placeholder='name'
          value={user.name}
        />
        <input
          onChange={handleChange}
          name='email'
          type='email'
          placeholder='email'
          value={user.email}
        />
        <button onClick={Submit}>Submit</button>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{message}</p>
      </form>
    </div>
  );
}

export default SimpleForm;
