import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

const MultipleInputs = () => {
  const [person, setPerson] = useState({ username: '', email: '', age: '' });

  const [people, setPeople] = useState([]);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { username, email, age } = person;
    if (username && email && age) {
      const newPerson = { ...person, id: uuidv4() };
      setPeople([...people, newPerson]);
      setPerson({ username: '', email: '', age: '' });
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
            value={person.name}
            name='username'
            onChange={changeHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            id='email'
            name='email'
            value={person.email}
            onChange={changeHandler}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='age'>Age: </label>
          <input
            type='text'
            id='age'
            name='age'
            value={person.age}
            onChange={changeHandler}
          />
        </div>
        <button type='submit'>submit</button>
      </form>

      {people.map((person) => {
        const { id, username, age, email } = person;
        return (
          <div className='item' key={id}>
            <h4>{username}</h4>
            <p>{age}</p>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default MultipleInputs;
