import React from 'react';

const LargeList = ({ items }) => {
  console.log('LargeList rendered');
  return (
    <div className="list-container">
      <h2>Large List</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps.items) === JSON.stringify(nextProps.items);
};

export default React.memo(LargeList, areEqual);
