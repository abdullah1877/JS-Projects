"use client";
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    document.getElementById('counter-display').style.color = 'green';
  };

  const handleDecrement = () => {
    setCount(count - 1);
    document.getElementById('counter-display').style.color = 'red';
  };

  const handleReset = () => {
    setCount(0);
    document.getElementById('counter-display').style.color = 'black';  
  }; 

  return (
    <div className='p-40'>
      <h1 style={{ fontSize: '5rem' }} className='flex justify-center'>Counter Project</h1>
      <h1 className='justify-center' id="counter-display" style={{ color: 'black', fontSize: '6rem', display: 'flex' }}>{count}</h1>
      <div className='flex justify-center gap-6'>
        <button style={{ border: '3px solid black', borderRadius: '10px', fontSize: '2rem', color: 'green' }} onClick={handleIncrement}>Increase</button>
        <button style={{ border: '3px solid black', borderRadius: '10px', fontSize: '2rem', color: 'black' }} onClick={handleReset}>Reset</button>
        <button style={{ border: '3px solid black', borderRadius: '10px', fontSize: '2rem', color: 'red' }} onClick={handleDecrement}>Decrease</button>
      </div> 
    </div>
  );
}; 

export default Counter;
