import React, { useState } from 'react';
import '../../App.css';
import Sidebar from '../Sidebar/Sidebar';
import EmailInput from '../Inputs/EmailInput'; // Asegúrate de importar solo lo que se necesitará en este componente
import PasswordInput from '../Inputs/PasswordInput'; // Asegúrate de importar solo lo que se necesitará en este componente
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
        
      </div>
      <div className="content">
        <img 
          src={showBigCards ? showSmallCardsIcon : showBigCardsIcon} 
          alt={showBigCards ? 'Show Small Cards' : 'Show Big Cards'}
          onClick={toggleCardsView}
          style={{ cursor: 'pointer' }} // Añade estilo para que parezca un botón
        />
        {showBigCards ? <AllBigCards theme={theme} /> : <Cards theme={theme} />}
      </div>
      {/* 
      <form>
        <div>
          <EmailInput className="input" />
        </div>
        <div>
          <PasswordInput className="input" />
        </div>
      </form>
      */}
    </div>
  );
};

export default PrincipalScreen;