import React from "react";
import './index.css'

export function Button({ text, className }) {
    return (
      <button className={`button ${className}`}>
        {text}
      </button>
    );
  };
