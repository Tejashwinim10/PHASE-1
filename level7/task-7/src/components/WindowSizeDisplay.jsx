import React from 'react';
import useWindowResize from '../hooks/useWindowResize';
import './WindowSizeDisplay.css';

const WindowSizeDisplay = () => {
  const { width, height } = useWindowResize();

  return (
    <div className="resize-container">
      <h2>Window Dimensions</h2>
      <div className="size-box">
        <p><strong>Width:</strong> {width}px</p>
        <p><strong>Height:</strong> {height}px</p>
      </div>
    </div>
  );
};

export default WindowSizeDisplay;
