import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

const ControlledInputs = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [people, setPeople] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (username && email) {
      const person = { id: uuidv4(), username, email };
      setPeople((people) => {
        return [...people, person];
      });
      setUsername('');
      setEmail('');
    } else {
      console.log('Inputs cannot be empty');
    }
  };
  return (
    <>
      <form className='form' onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='username'>Username: </label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit'>submit</button>
      </form>

      {people.map((person) => {
        const { id, username, email } = person;
        return (
          <div className='item' key={id}>
            <h4>{username}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default ControlledInputs;

// How to collect multiple inputs

//useRef - unControlled Inputs

//useReducer - Redux
