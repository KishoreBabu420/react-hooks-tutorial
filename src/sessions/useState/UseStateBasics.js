import React, { useState } from 'react';

const UseStateBasics = () => {
  const [username, setUsername] = useState('Kishore Babu');

  const [age, setAge] = useState(24);

  const clickHandler = function () {
    if (username === 'Kishore Babu') {
      setUsername('Rajesh Kumar');
    } else {
      setUsername('Kishore Babu');
    }
  };

  return (
    <div>
      <h2>{username}</h2>
      <h2>{age}</h2>
      <button type='button' className='button' onClick={clickHandler}>
        Update user
      </button>
      <button
        type='button'
        className='button'
        onClick={() => setAge(age === 24 ? '25' : '26')}
      >
        Update age
      </button>
    </div>
  );
};

export default UseStateBasics;
