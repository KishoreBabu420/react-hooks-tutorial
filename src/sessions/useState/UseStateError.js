import React from 'react';

const UseStateError = () => {
  let user = 'Kishore Babu';

  const clickHandler = () => {
    user = 'Rajesh Kumar';
    console.log(user);
  };
  return (
    <>
      <h2>{user}</h2>
      <button type='button' className='button' onClick={clickHandler}>
        Update User
      </button>
    </>
  );
};

export default UseStateError;

// onclick, onClick
//useState - will update the value and also it will trigger re-render
