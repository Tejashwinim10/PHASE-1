import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import './MyComponent.css'; // optional for component-scoped styling

const MyComponent = () => {
  const [value, setValue] = useLocalStorage('myKey', '');

  return (
    <div className="container">
      <h2>Local Storage Input</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        className="input"
      />
      <p className="info">Saved Value: <strong>{value}</strong></p>
    </div>
  );
};

export default MyComponent;
