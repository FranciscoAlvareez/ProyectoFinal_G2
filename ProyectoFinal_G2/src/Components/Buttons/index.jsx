import React from "react";
import './index.css'

export function Button({ text, className, icon, onClick }) {
    return (
      <button className={`button ${className}`} onClick={onClick}>
        {icon && <span className="button-icon">{icon}</span>}
        {text}
      </button>
    );
  };
