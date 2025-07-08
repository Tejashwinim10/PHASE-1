import React from "react";
import ExpensiveCalculation from "./components/ExpensiveCalculation";
import "./styles/App.css";

function App() {
  return (
    <div>
      <h1>React Memoization Example</h1>
      <ExpensiveCalculation />
    </div>
  );
}

export default App;
