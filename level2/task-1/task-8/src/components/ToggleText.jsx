import React, { useState } from 'react';

function ToggleText() {
  const [show, setShow] = useState(false);  

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide Text' : 'Show Text'}
      </button>

      {show && <div>This is Toggle Text!</div>}
    </div>
  );
}

export default ToggleText;
