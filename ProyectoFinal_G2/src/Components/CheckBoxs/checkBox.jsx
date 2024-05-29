import React, { useState } from "react";
import classes from "./index.module.css";

function CheckBox({ label, color }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <div className={classes.individualContainer}>
        <input
          type="checkbox"
          className={`${classes.checkbox} ${classes[color]}`}
          checked={checked}
          onChange={handleChange}
        />
        <p>{label}</p>
      </div>
    </>
  );
}
export default CheckBox;
