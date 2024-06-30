import React from "react";
import { useState } from "react";
import './index.css'; 

export function Switch({ onToggle }) {
    const [isOn, setIsOn] = useState(false);
  
    const toggleSwitch = () => {
      setIsOn(!isOn);
      onToggle();
    };
  
    return (
      <div className="switch-container" onClick={toggleSwitch}>
        <span className={`slider ${isOn ? 'on' : ''}`}></span>
      </div>
    );
  };