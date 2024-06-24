import React, { useState } from 'react';
import classes from "./index.module.css"
import closeIcon from '../../assets/icons/closeIcon.svg'
import searchIcon from '../../assets/icons/searchIcon.svg'

export function Dropdown(){
  return (
    <div className={classes.dropdown}>
      <input
        className={classes.dropdown_toggle}
        type="text"
      />
    </div>
  );
};

