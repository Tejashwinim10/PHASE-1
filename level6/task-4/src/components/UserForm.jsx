import { useState } from 'react';
import '../index.css';

const UserForm = () => {
  const [user, setUser] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <h2>User Info Form</h2>

      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter name"
        className="form-input"
      />

      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Enter age"
        className="form-input"
      />

      <div className="output">
        <p><strong>Name:</strong> {user.name || 'N/A'}</p>
        <p><strong>Age:</strong> {user.age || 'N/A'}</p>
      </div>
    </div>
  );
};

export default UserForm;
