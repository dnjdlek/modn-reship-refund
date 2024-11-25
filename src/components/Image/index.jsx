import React, { useEffect, useRef, useState } from 'react';
const Image = ({ src, children, className }) => {
  const imgRef = useRef(null);
  const observerRef = useRef();
  const [isLoad, setIsLoad] = useState(false);

  function onIntersection(entries, io) {
    entries.forEach((entry) => {
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

    imgRef.current && observerRef.current.observe(imgRef.current);
  }, []);

  return (
    <div
      ref={imgRef}
      style={{ backgroundImage: 'url(' + (isLoad && src ? src : '') + ')' }}
      className={className}
    >
      {children}
    </div>
  );
};
export default Image;
