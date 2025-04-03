import React, { useState } from "react";
import DynamicDiv from "./components/DynamicDiv";
import './App.css'
const App = () => {
  const [color, setColor] = useState("blue");

  const handleColorChange = (event) => {
    setColor(event.target.value); // Update the color based on user input
  };

  return (
    <div>
      <h1>Dynamic Background Color</h1>
      <input
        type="text"
        placeholder="Enter a color (e.g., red, green, #123456)"
        value={color}
        onChange={handleColorChange}
      />
      <DynamicDiv bgColor={color} />
    </div>
  );
};

export default App;