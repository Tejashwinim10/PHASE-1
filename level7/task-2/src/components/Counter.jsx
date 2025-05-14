import useCounter from '../hooks/useCounter';
import '../index.css';

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="counter-container">
      <h2>useCounter Hook Demo</h2>
      <div className="counter-display">
        <p>{count}</p>
      </div>
      <div className="counter-controls">
        <button onClick={increment} className="counter-btn">Increment</button>
        <button onClick={decrement} className="counter-btn">Decrement</button>
        <button onClick={reset} className="counter-btn">Reset</button>
      </div>
    </div>
  );
};

export default Counter;
