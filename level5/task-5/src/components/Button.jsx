import React from "react";
import "./Calculator.css";

const Button = ({ value, onClick }) => (
  <button className="button" onClick={() => onClick(value)}>
    {value}
  </button>
);

export default Button;
