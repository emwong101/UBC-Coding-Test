import React from "react";
import axios from "axios";
import DropDownSelector from "../../components/DropDownSelector/DropDownSelector";
import ItemCard from "../../components/Card/ItemCard";
import "./AlphabetPage.scss";
import ButtonMenu from "../../components/ButtonGroup/ButtonMenu";

function AlphabetPage({ setData, data, selection, setSelection }) {
  //split string for input options
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // set dropdown value to match selection, get request for first letter of drink
  const getAlphabet = (e) => {
    setSelection(e.target.value);
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e.target.value}`
      )
      .then((res) => setData(res.data.drinks));
  };

  return (
    <div className="alphabet">
      <label id="alphabet__dropdown">Select a letter to get started</label>
      <div className="alphabet__inputs">
        <DropDownSelector
          id="alphabet__dropdown"
          handleChange={getAlphabet}
          optionArray={alphabet}
          selection={selection}
          classes="dropdown dropdown__alphabet"
        ></DropDownSelector>
        <ButtonMenu
          handleChange={getAlphabet}
          optionArray={alphabet}
          selection={selection}
        />
      </div>
      <div className="card__container">
        {data
          ? data.map((drink) => {
              return (
                <ItemCard
                  image={drink.strDrinkThumb}
                  name={drink.strDrink}
                  key={drink.idDrink}
                  drink={drink}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default AlphabetPage;
