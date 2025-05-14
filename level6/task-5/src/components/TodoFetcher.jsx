import { useEffect, useState } from 'react';
import '../index.css';

const TodoFetcher = () => {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setTodo(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="fetch-container">
      <h2>Todo Data</h2>

      {loading && <p className="status loading">Loading...</p>}
      {error && <p className="status error">Error: {error}</p>}

      {todo && (
        <div className="todo-card">
          <p><strong>ID:</strong> {todo.id}</p>
          <p><strong>Title:</strong> {todo.title}</p>
          <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default TodoFetcher;
