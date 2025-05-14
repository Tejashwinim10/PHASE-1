import React, { useState } from "react";
import Button from "./Button";
import "../styles/Calculator.css";


const Calculator = () => {
  const [input, setInput] = useState(""); // Current input
  const [operator, setOperator] = useState(""); // Stored operator
  const [result, setResult] = useState(null); // Calculation result

  // Handle button clicks
  const handleClick = (value) => {
    if (value === "=") {
      // Calculate result
      try {
        setResult(eval(input)); // Using eval to calculate expression (simple approach)
        setInput("");
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      // Clear input
      setInput("");
      setResult(null);
    } else if (["+", "-", "*", "/"].includes(value)) {
      // Store the operator and reset input for the next number
      setOperator(value);
      setInput((prev) => prev + value);
    } else {
      // Append number to the input
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input-display">{input}</div>
        {result !== null && <div className="result-display">= {result}</div>}
      </div>
      <div className="buttons">
        {["7", "8", "9", "/"].map((value) => (
          <Button key={value} value={value} onClick={handleClick} />
        ))}
        {["4", "5", "6", "*"].map((value) => (
          <Button key={value} value={value} onClick={handleClick} />
        ))}
        {["1", "2", "3", "-"].map((value) => (
          <Button key={value} value={value} onClick={handleClick} />
        ))}
        {["0", ".", "C", "+"].map((value) => (
          <Button key={value} value={value} onClick={handleClick} />
        ))}
        <Button value="=" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
