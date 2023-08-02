import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ from, to }) => {
  const nodeRef = useRef();
  const [count, setCount] = useState(from);

  useEffect(() => {
    const node = nodeRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter();
          }
        });
      },
      { threshold: 0.25 } // Adjust the threshold as needed
    );

    observer.observe(node);

    // Avoid triggering multiple animations for multiple Counter components
    return () => observer.unobserve(node);
  }, []);

  const animateCounter = () => {
    const step = Math.abs(to - from) / 60; // Assuming 60 FPS
    const direction = to > from ? 1 : -1;
    let currentCount = from;

    const animation = setInterval(() => {
      currentCount += step * direction;
      setCount(currentCount);

      if ((direction === 1 && currentCount >= to) || (direction === -1 && currentCount <= to)) {
        clearInterval(animation);
        setCount(to);
      }
    }, 1000 / 60); // 60 FPS

    // Clean up the interval when the component unmounts
    return () => clearInterval(animation);
  };

  return (
    <motion.span 
    className="text-2xl md:text-4xl lg:text-9xl font-semibold bg-gradient-to-r from-slate-800 to-slate-400 text-transparent bg-clip-text"
    ref={nodeRef} initial={{ count: from }} animate={{ count }}>
      {Math.round(count)}
    </motion.span>
  );
};

export default Counter;
