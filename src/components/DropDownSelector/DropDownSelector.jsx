import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./DropDownSelector.scss";

function DropDownSelector({
  handleChange,
  optionArray,
  selection,
  id,
  classes,
}) {
  //map through optionsArray prop passed from pages
  return (
    <div>
      <Select
        value={selection ? selection : ""}
        onChange={handleChange}
        className={classes}
        labelId={id}
      >
        {optionArray.map((option) => {
          return (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
}

export default DropDownSelector;
