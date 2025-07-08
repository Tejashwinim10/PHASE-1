import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="page">
      <h2>Dashboard (Protected)</h2>
      <Link to="/profile">Go to Profile</Link><br />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
