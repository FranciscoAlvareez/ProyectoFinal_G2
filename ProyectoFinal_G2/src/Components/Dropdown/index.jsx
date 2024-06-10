import React, { useState } from 'react';
import closeIcon from '../../assets/icons/closeIcon.svg'
import searchIcon from '../../assets/icons/searchIcon.svg'

export function Dropdown(){
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([]); // Estado para el historial

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if(event.key === 'Enter' && inputValue.trim() !== '') {
      // Agrega el valor actual del input al inicio del historial
      setHistory(prevHistory => [inputValue, ...prevHistory]);
      setInputValue(''); // Limpia el input después de agregar al historial
    }
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">      
      <input
        className="dropdown-toggle"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer' }}
      />    
      {isOpen && (
        <ul className="dropdown-menu">
          {history.map((item, index) => (
            <li key={index} onClick={() => handleOptionClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

