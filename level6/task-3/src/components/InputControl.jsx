import { useState } from 'react';
import '../index.css';

const InputControl = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="input-container">
      <h2>Live Input Display</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        className="input-field"
      />
      <p className="output-text">
        {text ? `You typed: ${text}` : 'Start typing to see the magic! ✨'}
      </p>
    </div>
  );
};

export default InputControl;
