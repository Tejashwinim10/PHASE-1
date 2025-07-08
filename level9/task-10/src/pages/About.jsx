import React, { useMemo } from "react";

const About = () => {
  const heavyCalculation = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1e6; i++) sum += i;
    return sum;
  }, []);

  return (
    <div>
      <h1>📘 About</h1>
      <p>Heavy calculation result: {heavyCalculation}</p>
    </div>
  );
};

export default React.memo(About);
