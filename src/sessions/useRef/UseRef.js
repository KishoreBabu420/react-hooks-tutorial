import React, { useEffect, useRef } from 'react';

const UseRef = () => {
  const refContainer = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    refContainer.current.focus();
  });
  return (
    <>
      <form className='form' onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='username'>Username: </label>
          <input type='text' id='username' name='username' ref={refContainer} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default UseRef;
