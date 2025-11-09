import React, { useState } from 'react';
import './Counter.css';
const Counter = () => {
    const [count, setCount] = React.useState(0)
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div className='counter-container'>
            <h1>Counter</h1>
            <p className='counter'>{count}</p>
            <div className="btn">
                <button className='increment' onClick={increment}>Increment</button>
                <button className='decrement' onClick={decrement}>Decrement</button>
                <button className='reset' onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;