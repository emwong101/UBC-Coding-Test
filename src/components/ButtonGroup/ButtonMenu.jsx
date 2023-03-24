import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import "./ButtonMenu.scss";

function ButtonMenu({ optionArray }) {
  return (
    <div>
      <ButtonGroup variant="text" className="button__menu">
        {optionArray.map((option) => {
          return (
            <Button key={option} value={option}>
              {option}
            </Button>
          );
        })}
      </ButtonGroup>
    </div>
  );
}

export default ButtonMenu;
