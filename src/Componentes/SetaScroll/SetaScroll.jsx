import React, { useState, useEffect } from 'react';
import './SetaScroll.css';

const SetaScroll = ({ targetId, delay = 1500 }) => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  const handleScroll = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {showArrow && (
        <div className="seta-scroll-container" onClick={handleScroll}>
          <div className="seta-scroll"></div>
        </div>
      )}
    </>
  );
};

export default SetaScroll;