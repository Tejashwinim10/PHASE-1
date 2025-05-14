import useInput from '../hooks/useInput';
import '../index.css';

const InputField = () => {
  const { value, handleChange, inputRef } = useInput('');

  return (
    <div className="input-container">
      <h2>Custom Hook - useInput</h2>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        className="input-field"
        placeholder="Type something..."
      />
      <p className="input-value">You typed: {value}</p>
    </div>
  );
};

export default InputField;
