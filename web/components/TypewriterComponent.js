import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterComponent = () => {
  return (
    <div style={{ fontSize: '29px', fontWeight: 'inherit' }} >
      <Typewriter
        words={['Seamless', 'Secure', 'Scalable']}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        textStyle={{ color: '#c49000', fontWeight: 500, fontSize: '29px' }}
      />
    </div>
  );
};

export default TypewriterComponent;
