import { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './TitleChanger.css';

const TitleChanger = () => {
  const [count, setCount] = useState(0);
  useDocumentTitle(`Clicked ${count} times`);

  return (
    <div className="title-changer">
      <h1>Dynamic Document Title</h1>
      <p>You've clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default TitleChanger;
