import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../index.css';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-box">
      <h2>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h2>
      <button className="toggle-btn" onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
        <span style={{ marginLeft: '10px' }}>Toggle Theme</span>
      </button>
      <p>This page adapts based on the selected theme.</p>
    </div>
  );
};

export default ThemeToggler;
