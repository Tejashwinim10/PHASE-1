import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/products" className="nav-link">
          Products
        </Link>
      </nav>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
