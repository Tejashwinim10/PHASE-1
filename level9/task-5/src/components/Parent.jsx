import React, { useEffect, useState } from 'react';
import LargeList from './LargeList';

const Parent = () => {
  const [counter, setCounter] = useState(0);
  const [listData] = useState(() =>
    Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>Counter: {counter}</h1>
      <LargeList items={listData} />
    </div>
  );
};

export default Parent;
