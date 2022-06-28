import React, { useState } from 'react';

//JavaScript
// const input = document.getElementById('input')
// const value = input.value;

//<label for =""> </label>

//React
//value, onChange

const FormErrorExample = () => {
  const [username, setUsername] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
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
            onChange={() => setUsername('Kishore')}
          />
        </div>
        <button type='submit'>submit</button>
      </form>
    </>
  );
};

export default FormErrorExample;
