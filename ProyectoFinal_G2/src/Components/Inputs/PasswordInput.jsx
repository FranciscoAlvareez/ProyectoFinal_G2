import React, { useState } from 'react';
import './InputStyles.css';
import eyeIcon from '../../assets/icons/eyeIcon.svg';
import eyeOffIcon from '../../assets/icons/eyeOffIcon.svg';

const PasswordInput = ({ className }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`password-input-container ${className}`}>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        className="password-input"
      />
      <button
        type="button"
        className="password-toggle-button"
        onClick={togglePasswordVisibility}
      >
        <img src={showPassword ? eyeOffIcon : eyeIcon} alt={showPassword ? 'Hide' : 'Show'} />
      </button>
    </div>
  );
};

export default PasswordInput;
