import React from 'react'
import File1 from './components/File1'
import File2 from './components/File2'
import './App.css'

function App() {
  const display = true
  return display ? <File1 name="Welcome Back!" /> : <File2 name="Please Login" />
}

export default App
