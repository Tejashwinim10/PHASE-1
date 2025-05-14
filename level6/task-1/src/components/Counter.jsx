import { useState } from 'react';
import '../index.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter-box">
      <h1 className="counter-title">Counter: {count}</h1>
      <div>
        <button className="counter-button" onClick={increment}>+</button>
        <button className="counter-button decrement" onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
