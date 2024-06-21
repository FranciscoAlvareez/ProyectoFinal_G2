import React from "react";
import { useState } from "react";
import './index.css'; 

export function Switch()    {
    const [isOn, setIsOn] = useState(false);
  
    const toggleSwitch = () => {
      setIsOn(!isOn);
    };
  
    return (
      <div className="switch-container" onClick={toggleSwitch}>
        <span className={`slider ${isOn ? 'on' : ''}`}></span>
      </div>
    );
  };