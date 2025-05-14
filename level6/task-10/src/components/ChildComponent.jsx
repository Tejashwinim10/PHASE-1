import React from 'react';
import '../index.css';

const ChildComponent = React.memo(({ onAction }) => {
  console.log('ChildComponent rendered');

  return (
    <div className="child-box">
      <h2>Child Component</h2>
      <button onClick={onAction} className="child-btn">
        Run Callback
      </button>
    </div>
  );
});

export default ChildComponent;
