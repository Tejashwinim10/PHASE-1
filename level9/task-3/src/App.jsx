import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Overview from './components/Overview';
import Profile from './components/Profile';
import Settings from './components/Settings';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Navigate to="/dashboard/overview" replace />} />
         <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
