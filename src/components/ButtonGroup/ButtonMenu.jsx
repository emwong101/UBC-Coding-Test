import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import "./ButtonMenu.scss";

function ButtonMenu({ optionArray, handleChange }) {
  return (
    <div>
      <ButtonGroup variant="text" className="button__menu" size="large">
        {optionArray.map((option) => {
          return (
            <Button key={option} value={option} onClick={handleChange}>
              {option}
            </Button>
          );
        })}
      </ButtonGroup>
    </div>
  );
}

export default ButtonMenu;
