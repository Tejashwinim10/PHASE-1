import { useState } from 'react';
import TimerLogger from './components/TimerLogger';
import './index.css';

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="App">
      <div className="app-container">
        <button className="toggle-btn" onClick={() => setShowTimer(prev => !prev)}>
          {showTimer ? 'Stop Timer' : 'Start Timer'}
        </button>
        {showTimer && <TimerLogger />}
      </div>
    </div>
  );
}

export default App;
