import { useEffect, useRef } from 'react';

const useIntersectionObserver = (onIntersect, options) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || typeof onIntersect !== 'function') return;

    const observer = new IntersectionObserver(onIntersect, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, onIntersect]);

  return ref;
};

export default useIntersectionObserver;
