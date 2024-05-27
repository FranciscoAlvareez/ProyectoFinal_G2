import React from 'react';
import './InputStyles.css';

const Input = ({ type, placeholder, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;