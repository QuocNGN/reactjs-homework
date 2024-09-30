import React, { useState } from 'react';
import B from '../ComponentB/B';
import './A.scss';

function A() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((number) => number + 1);
  };

  return (
    <div className='wrapper_A'>
      <p>Counter: {number}</p>
      <div className='buttons'>
        <button onClick={increment}>Click A</button>

        <B increment={increment} />
      </div>
    </div>
  );
}

export default A;
