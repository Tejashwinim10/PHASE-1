import React from 'react';
import useFetch from '../hooks/useFetch';
import './FetchComponent.css';

const FetchComponent = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1');

  return (
    <div className="fetch-wrapper">
      <h2>Post Viewer</h2>
      {loading && <p className="status loading">Loading...</p>}
      {error && <p className="status error">Error: {error}</p>}
      {data && (
        <div className="post-box">
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default FetchComponent;
