import React, { useState } from 'react';

import { data } from '../../data';

const UseStateArrays = () => {
  const [users, setUsers] = useState(data);
  const deleteUser = function (id) {
    let newUsers = users.filter((user) => user.id !== id);

    setUsers(newUsers);
  };
  return (
    <>
      {users.map((user) => (
        <div className='item' key={user.id}>
          <h3>{user.name}</h3>
          <button type='button' onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </div>
      ))}

      <button type='button' onClick={() => setUsers([])}>
        {' '}
        Clear Users
      </button>
    </>
  );
};

export default UseStateArrays;
