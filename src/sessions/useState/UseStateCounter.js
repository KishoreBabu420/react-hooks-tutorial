import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = function () {
    setValue(0);
  };

  const increaseLater = function () {
    console.log('clicked');
    setTimeout(() => {
      setValue((prev) => prev + 1);
    }, 1000);
  };
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <button
          className='btn'
          type='button'
          onClick={() => setValue(value - 1)}
        >
          Decrease
        </button>
        <button className='btn' type='button' onClick={reset}>
          Reset
        </button>
        <button
          className='btn'
          type='button'
          onClick={() => setValue(value + 1)}
        >
          Increase
        </button>
      </section>

      <section style={{ margin: '4rem 0' }}>
        <h2>Timed Counter</h2>
        <h1>{value}</h1>
        <button className='btn' type='button' onClick={increaseLater}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
