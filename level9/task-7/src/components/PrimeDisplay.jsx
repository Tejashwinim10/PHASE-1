import React from "react";
import "../styles/App.css";

const PrimeDisplay = React.memo(({ primes, highlight }) => {
  return (
    <div className={highlight ? "highlight-box" : "box"}>
      <h4>Total Primes: {primes.length}</h4>
      <div className="prime-list">
        {primes.map((prime, index) => (
          <span key={index}>{prime}, </span>
        ))}
      </div>
    </div>
  );
});

export default PrimeDisplay;
