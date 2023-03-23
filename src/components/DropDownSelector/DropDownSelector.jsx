import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./DropDownSelector.scss";

function DropDownSelector({ handleChange, optionArray, selection }) {
  return (
    <div>
      <Select
        value={selection ? selection : ""}
        label="Select"
        onChange={handleChange}
        className="dropdown"
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
