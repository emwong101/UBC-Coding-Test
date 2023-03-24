import React from "react";
import Wine from "../../assets/wine.svg";
import Pineapple from "../../assets/pineapple.svg";
import Martini from "../../assets/martini-black.svg";
import "./Default.scss";

function Default() {
  return (
    <div className="landing">
      <div className="landing__icons">
        <img src={Wine} alt="wine glass" className="landing__icon" />
        <img src={Pineapple} alt="pineapple drink" className="landing__icon" />
        <img src={Martini} alt="martini glass" className="landing__icon" />
      </div>
      <h2 className="landing__heading">Welcome to the Cocktail Bar!</h2>
      <h4 className="landing__text">
        Find a cocktail by category or alphabetical order. Please select a tab
        to get started!
      </h4>
    </div>
  );
}

export default Default;
