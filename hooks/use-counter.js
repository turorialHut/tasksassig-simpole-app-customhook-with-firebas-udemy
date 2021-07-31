import React, { useState, useEffect } from 'react';

const useCounter = (forward) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return counter;
};

export default useCounter;
