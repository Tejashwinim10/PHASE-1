import React from 'react';
import Greeting from './components/Greeting'; 
import './App.css'

function App() {
  return (
    <div>
      <Greeting name= "Teju"space=" "message="how are u?" />
      <Greeting name= {123} space=" "message="how are u?" />

    </div>
  );
}

export default App;