import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="page">
    <h2>Home Page (Public)</h2>
    <Link to="/login">Go to Login</Link>
  </div>
);

export default Home;
