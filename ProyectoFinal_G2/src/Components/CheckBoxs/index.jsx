import React from 'react';
import CheckBox from "./checkBox"
import classes from "./index.module.css"
function CheckBoxsContainer() {
  const checkBoxData = [
    { label: 'Option 1', color: 'whiteMode' },
    { label: 'Option 2', color: 'darkMode' },
    { label: 'Option 3', color: 'whiteMode' }
  ];

  return (
    <div className={classes.container}>
      {checkBoxData.map((data, index) => (
        <CheckBox key={index} label={data.label} color={data.color} />
      ))}
    </div>
  );
}
export default CheckBoxsContainer