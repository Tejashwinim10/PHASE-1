import React from 'react'
import './App.css'
function App() {
  const List = ["Hema", "Harini", "Rijutha"]
  return (
    <>
      <div className='crud'>
        <h2>Friends</h2>
        {List.map((lists) => (<li >{lists}</li>))}
      </div>
    </>
  );
}

export default App