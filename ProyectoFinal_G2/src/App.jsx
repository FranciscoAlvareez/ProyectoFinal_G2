import React, { useState } from 'react';
import './App.css';
import CompleteInfoCard from "./Components/CompleteInfoCard/index"
import AllBigCards from "./Components/BigCards/index"
import Cards from "./Components/SmallCards/index"
import Sidebar from './Components/Sidebar/Sidebar';
import EmailInput from './Components/Inputs/EmailInput';
import PasswordInput from './Components/Inputs/PasswordInput';
import { Switch } from './Components/Switch';
import SupRectangle from './Components/SupRectangle';


const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <div className="switch-wrapper">
        <Switch onToggle={toggleTheme} />
      </div>
      <Sidebar theme={theme}/>
      <SupRectangle />
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

export default App;
