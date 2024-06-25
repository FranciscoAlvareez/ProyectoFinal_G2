import React from "react"
import classes from "./index.module.css"
import gamefinderIcon from '../../assets/icons/gamefinderIcon.svg'
import userIcon from '../../assets/icons/userIcon.svg'
import rectangleIcon from '../../assets/icons/rectangleIcon.svg'
import { Dropdown } from "../Dropdown/index"

const SupRectangle = () => {
    return (
      <div className={classes.background_section}>
        <div className={classes.elements}>
          <img src={gamefinderIcon} alt="gamefinder" className={classes.gamefinder_image}/>
          <Dropdown />
          <img src={userIcon} alt="usericon" className={classes.user_image}/>
        </div>
      </div>
    );
  };
  
  export default SupRectangle;