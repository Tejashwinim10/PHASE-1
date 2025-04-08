import React, { useState } from 'react';


function InputText() {
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Username:', username);
    console.log('Last Name:', lastname);
    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input 
          type="text"
          placeholder="Enter Last Name"
          onChange={(e) => setLastname(e.target.value)}
        />

        <input 
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InputText;
