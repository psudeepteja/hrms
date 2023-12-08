import React from 'react';

const Button = ({ onClick, children, variant }) => {
  return (
    <button onClick={onClick} className={`button ${variant}`}>
      {children}
    </button>
  );
};

export default Button;
