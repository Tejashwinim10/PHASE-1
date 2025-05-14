import { useState } from 'react';
import '../index.css';

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="toggle-container">
      <button onClick={toggleContent} className="toggle-button">
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      
      {isVisible && (
        <div className="toggle-content">
          <h2>Hello, I'm visible now! 👋</h2>
          <p>This content appears and disappears based on the toggle button.</p>
        </div>
      )}
    </div>
  );
};

export default Toggle;
