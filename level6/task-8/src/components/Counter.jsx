import { useReducer } from 'react';
import { counterReducer, initialState } from '../reducers/counterReducer';
import '../index.css';

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="counter-container">
      <h1>useReducer Counter</h1>
      <p className="count-display">Count: {state.count}</p>
      <div className="btn-group">
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
