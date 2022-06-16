import React, { useState } from 'react';
import { useEffect } from 'react';

const url = `https://api.github.com/users/kishorebabu420`;

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState('No user');

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status < 300) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (isLoading) {
    return (
      <>
        <h2>Loading....</h2>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <h2>There is an error</h2>
      </>
    );
  }
  return (
    <>
      <h2>{user}</h2>
    </>
  );
};

export default MultipleReturns;
