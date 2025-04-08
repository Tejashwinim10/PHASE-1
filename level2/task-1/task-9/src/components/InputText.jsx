import React, { useState } from 'react';

function InputText() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false); 

  const handleSubmit = () => {
    setSubmitted(true);
  }

  return (
    <div>
      <h2>Enter Username & Password</h2>

      <input 
        type="text" 
        placeholder="Enter Username" 
        onChange={(e) => setUsername(e.target.value)}
      />

      <input 
        type="password" 
        placeholder="Enter Password" 
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      {submitted && (
        <div>
          <h3>Username: {username}</h3>
          <h3>Password: {password}</h3>
        </div>
      )}
    </div>
  );
}

export default InputText;
