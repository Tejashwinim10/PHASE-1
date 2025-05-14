import useToggle from '../hooks/useToggle';
import '../index.css';

const ToggleContent = () => {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div className="toggle-container">
      <h2>useToggle Hook Demo</h2>
      <button onClick={toggleVisibility} className="toggle-btn">
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>
      
      {isVisible && (
        <div className="content-box">
          <p>This content appears and disappears when the button is clicked.</p>
        </div>
      )}
    </div>
  );
};

export default ToggleContent;
