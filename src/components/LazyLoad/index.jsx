import React, { useEffect, useRef, useState } from 'react';
const LazyLoad = ({ children }) => {
    const divRef = useRef(null);
    const observerRef = useRef();
    const [isLoad, setIsLoad] = useState(false);
  
    function onIntersection(entries, io) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          io.unobserve(entry.target);
          setIsLoad(true);
        }
      });
    }
  
    useEffect(() => {
      if (!observerRef.current) {
        observerRef.current = new IntersectionObserver(onIntersection);
      }
  
      divRef.current && observerRef.current.observe(divRef.current);
    }, []);
  
    return (
        <div ref={divRef}>
            {isLoad ? children : ''}
        </div>
    );
};
export default LazyLoad;