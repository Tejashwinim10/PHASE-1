import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/products" className="nav-link">Products</Link>
  </nav>
);

export default Navbar;
