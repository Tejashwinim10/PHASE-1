import { useRef } from 'react';
import '../index.css';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="ref-container">
      <h1>Focus Input with useRef</h1>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" className="input-box" />
      <button onClick={handleFocus} className="focus-btn">
        Focus Input
      </button>
    </div>
  );
};

export default FocusInput;
