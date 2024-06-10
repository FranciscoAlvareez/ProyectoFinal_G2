import React, { useState } from 'react';
import './InputStyles.css';

const EmailInput = ({ className }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(value === '' ? null : value.includes('@'));
  };

  return (
    <input
      type="email"
      placeholder="Email"
      className={`${className} ${isValid === null ? '' : isValid ? 'input-valid' : 'input-invalid'}`}
      value={email}
      onChange={handleEmailChange}
    />
  );
};

export default EmailInput;