import React, { useState } from 'react';
import classes from "./index.module.css"
import searchIcon from '../../assets/icons/searchIcon.svg'
import closeIcon from '../../assets/icons/closeIcon.svg'

export function Dropdown(){
  return (
    <div className={classes.dropdown}>
      <img src={searchIcon} alt="Ícono de búsqueda" className={classes.searchIcon} />
      <input
        className={classes.dropdown_toggle}
        type="text"
      />
      <img src={closeIcon} alt="Ícono de cerrado" className={classes.closeIcon} />
    </div>
  );
};

