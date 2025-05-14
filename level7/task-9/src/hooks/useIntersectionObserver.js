import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback, options) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [callback, options]);

  return targetRef;
};

export default useIntersectionObserver;
