import React from 'react';

const SplitText = ({ children, ...props }) => {
  const characters = children.split('').map((char, index) => (
    <span
      key={index}
      className="inline-block"
      style={{ whiteSpace: 'pre' }} // This handles spaces correctly
    >
      {char}
    </span>
  ));

  return <div {...props}>{characters}</div>;
};

export default SplitText;