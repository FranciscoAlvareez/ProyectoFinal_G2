import React from "react";
import './index.css'

export function Button({ text, className, icon }) {
    return (
      <button className={`button ${className}`}>
        {icon && <span className="button-icon">{icon}</span>}
        {text}
      </button>
    );
  };
