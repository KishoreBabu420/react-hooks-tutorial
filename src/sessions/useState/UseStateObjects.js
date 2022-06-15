import React, { useState } from 'react';

const UseStateObjects = () => {
  const [person, setPerson] = useState({
    name: 'Kishore',
    age: 25,
    city: 'Coimbatore',
    profession: 'Developer',
  });

  const updateUser = function () {
    setPerson({ ...person, age: 22, profession: 'Trainer' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.city}</h3>
      <h3>{person.profession}</h3>
      <button className='btn' type='button' onClick={updateUser}>
        Update User
      </button>
    </>
  );
};

export default UseStateObjects;
