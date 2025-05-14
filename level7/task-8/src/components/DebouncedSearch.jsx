
import { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';
import './DebouncedSearch.css';

const DebouncedSearch = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      console.log('Searching for:', debouncedQuery);
      
    }
  }, [debouncedQuery]);

  return (
    <div className="search-container">
      <h1>Debounced Search</h1>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>Searching for: <strong>{debouncedQuery}</strong></p>
    </div>
  );
};

export default DebouncedSearch;
