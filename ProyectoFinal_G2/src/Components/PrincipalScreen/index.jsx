import React, { useState } from 'react';
import '../../App.css';
import Sidebar from '../Sidebar/Sidebar';
import { Switch } from '../Switch';
import SupRectangle from '../SupRectangle';
import Cards from '../SmallCards';
import AllBigCards from '../BigCards';

import showSmallCardsIcon from '../../assets/icons/showSmallCardsIcon.svg';
import showBigCardsIcon from '../../assets/icons/showBigCardsIcon.svg';

const PrincipalScreen = () => {

  const [theme, setTheme] = useState("light");
  const [showBigCards, setShowBigCards] = useState(false);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  

  const toggleCardsView = () => {
    setShowBigCards((prevShowBigCards) => !prevShowBigCards);
  };


  return (
    <div className={`app ${theme}`}>
      <div className="switch-wrapper-principal">
        <p>Dark Mode</p>
        <Switch onToggle={toggleTheme} />
        <img 
          className="imgSwitchCards"
          src={showBigCards ? showSmallCardsIcon : showBigCardsIcon} 
          alt={showBigCards ? 'Show Small Cards' : 'Show Big Cards'}
          onClick={toggleCardsView}
          style={{ cursor: 'pointer' }} // Añade estilo para que parezca un botón
        />
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
        
      </div>
      <div className="content">
        {showBigCards ? <AllBigCards theme={theme} /> : <Cards theme={theme} />}
      </div>
    </div>
  );
};

export default PrincipalScreen;
