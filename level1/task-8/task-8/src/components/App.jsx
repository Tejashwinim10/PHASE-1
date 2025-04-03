import React, { useState } from "react";
import RoleMessage from "./RoleMessage";

const App = () => {
  const [role, setRole] = useState("User"); // Default role is User
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default logged-out state

  return (
    <div>
      <RoleMessage role={role} isLoggedIn={isLoggedIn} />
      <div className="controls">
        <button onClick={() => setRole("Admin")}>Set to Admin</button>
        <button onClick={() => setRole("User")}>Set to User</button>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
    </div>
  );
};

export default App;