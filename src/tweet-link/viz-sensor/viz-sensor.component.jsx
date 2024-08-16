import React, { useEffect, useRef, useState } from 'react';

const VisibilitySensor = ({ onChange, children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sensorRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsVisible(inView);
        onChange(inView);
      },
      { threshold }
    );

    if (sensorRef.current) {
      observer.observe(sensorRef.current);
    }

    return () => {
      if (sensorRef.current) {
        observer.unobserve(sensorRef.current);
      }
    };
  }, [sensorRef, onChange, threshold]);

  return <div ref={sensorRef}>{children}</div>;
};

export default VisibilitySensor;
