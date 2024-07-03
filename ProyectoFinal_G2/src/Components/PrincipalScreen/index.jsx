import React, { useState } from 'react';
import '../../App.css';
import Sidebar from '../Sidebar/Sidebar';
import { Switch } from '../Switch';
import SupRectangle from '../SupRectangle';
import Cards from '../SmallCards';

const PrincipalScreen = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <div className="switch-wrapper-principal">
        <Switch onToggle={toggleTheme} />
      </div>
      <div className="header">
        <SupRectangle />
        <div className="header-text">
          <h1>New and trending</h1>
          <p>Based on player counts and release date</p>
        </div>
      </div>
      <div className="main-content">
        <Sidebar theme={theme} />
        <div className="content">
          <Cards theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default PrincipalScreen;