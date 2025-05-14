import React, { useState, useCallback } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './InfiniteScrollList.css';

const InfiniteScrollList = () => {
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => `Item #${i + 1}`));
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setItems(prev => [
        ...prev,
        ...Array.from({ length: 10 }, (_, i) => `Item #${prev.length + i + 1}`)
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const loaderRef = useIntersectionObserver(loadMore, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  return (
    <div className="scroll-container">
      {items.map((item, index) => (
        <div className="item" key={index}>{item}</div>
      ))}
      <div ref={loaderRef} className="loading">{loading ? 'Loading...' : 'Scroll to load more'}</div>
    </div>
  );
};

export default InfiniteScrollList;
