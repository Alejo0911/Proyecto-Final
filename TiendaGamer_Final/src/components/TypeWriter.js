
import React, { useEffect, useState } from 'react';

const TypeWriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100); // Velocidad del efecto de escritura
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <h1>{displayedText}</h1>;
};

export default TypeWriter;
