import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || typeof callback !== 'function') return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref.current, callback]);

  return { ref };
};

export default useIntersectionObserver;
