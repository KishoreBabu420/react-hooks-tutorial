import React, { useState, useEffect } from 'react';

//use effect is a higher order function
//by default it runs after every re-render
//Hooks cannot be used conditionally
//use effect is also having second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [age, setAge] = useState(24);
  useEffect(() => {
    console.log('first use effect');
    if (value >= 1) {
      document.title = `Value - ${value}`;
    }
  }, [value, age]);

  useEffect(() => {
    console.log('second use effect');
  }, []);

  return (
    <>
      <h2>{value}</h2>
      <button className='btn' type='button' onClick={() => setValue(value + 1)}>
        Increase
      </button>

      <h2>{age}</h2>
      <button className='btn' type='button' onClick={() => setAge(age + 1)}>
        Increase
      </button>
    </>
  );
};

export default UseEffectBasics;
