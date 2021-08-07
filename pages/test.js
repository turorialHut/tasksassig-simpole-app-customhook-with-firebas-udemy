import React, { useEffect } from 'react';

const Test = () => {
  const testFunc = (data) => {
    console.log('test funct');
  };

  useEffect(() => {
    testFunc('hi');
  }, []);

  return <div>test</div>;
};

export default Test;
