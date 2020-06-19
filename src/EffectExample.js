import React, { useEffect, useState } from 'react';


function EffectExamples() {

  const [ counter, setCounter ] = useState(0);

  useEffect(() => {
    document.title = counter;

    // component will unmount
    return () => document.title = 'React App';

  }, [counter]);

  return (
      <>
        <h1>{ counter }</h1>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
      </>
  );
}

export default EffectExamples;