import React from "react";
import "./styles.css";

const RoleMessage = ({ role, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <p className="message">Please log in to view your content.</p>;
  }

  return (
    <div className="container">
      {role === "Admin" ? (
        <div className="admin-content">
          <h1>Admin Dashboard</h1>
          <p className="admin-message">You have administrative privileges.</p>
        </div>
      ) : (
        <div className="user-content">
          <h1>User Dashboard</h1>
          <p className="user-message">Welcome to your personalized content.</p>
        </div>
      )}
    </div>
  );
};

export default RoleMessage;