import React, { useState, useMemo, useCallback } from "react";
import PrimeDisplay from "./PrimeDisplay";
import "../styles/App.css";

const ExpensiveCalculation = () => {
  const [limit, setLimit] = useState(1000);
  const [highlight, setHighlight] = useState(false);

  // Expensive prime number calculation
  const calculatePrimes = (n) => {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (primes.every(p => i % p !== 0)) {
        primes.push(i);
      }
    }
    return primes;
  };

  const primeNumbers = useMemo(() => {
    return calculatePrimes(limit);
  }, [limit]);

  const handleToggleHighlight = useCallback(() => {
    setHighlight(prev => !prev);
  }, []);

  return (
    <div className="container">
      <h2>Prime Number Calculator</h2>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        className="input"
      />
      <button onClick={handleToggleHighlight} className="button">
        Toggle Highlight
      </button>

      <PrimeDisplay primes={primeNumbers} highlight={highlight} />
    </div>
  );
};

export default ExpensiveCalculation;
