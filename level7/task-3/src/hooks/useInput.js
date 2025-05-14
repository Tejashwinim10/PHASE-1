import { useState, useRef } from 'react';

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    handleChange,
    inputRef,
  };
};

export default useInput;
