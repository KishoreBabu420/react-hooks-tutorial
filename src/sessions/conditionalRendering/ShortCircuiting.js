import React, { useState } from 'react';

// &&, ||

//Terenary operator

const ShortCircuiting = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(true);
  return (
    <>
      <h1>{isError || 'Kishore'}</h1>
      <h1>{isError && 'Developer'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {!isError && <h1>Error..</h1>}

      {isError ? <h1>There is an Error</h1> : <h1>There is no Error</h1>}
    </>
  );
};

export default ShortCircuiting;
