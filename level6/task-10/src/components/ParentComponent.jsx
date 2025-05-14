import { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';
import '../index.css';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const memoizedCallback = useCallback(() => {
    console.log('Callback triggered!');
  }, []);

  return (
    <div className="parent-box">
      <h1>useCallback Demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)} className="parent-btn">
        Increment Count
      </button>

      <ChildComponent onAction={memoizedCallback} />
    </div>
  );
};

export default ParentComponent;
