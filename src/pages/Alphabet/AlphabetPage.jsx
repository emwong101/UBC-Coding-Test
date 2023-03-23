import React, { useState } from "react";
import axios from "axios";
import DropDownSelector from "../../components/DropDownSelector/DropDownSelector";
import ItemCard from "../../components/Card/ItemCard";
import "./AlphabetPage.scss";

function AlphabetPage({ setData, data }) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const [selection, setSelection] = useState();

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
      <DropDownSelector
        handleChange={getAlphabet}
        optionArray={alphabet}
        selection={selection}
      ></DropDownSelector>
      <div className="card__container">
        {data
          ? data.map((drink) => {
              return (
                <ItemCard
                  image={drink.strDrinkThumb}
                  name={drink.strDrink}
                  key={drink.idDrink}
                />
              );
            })
          : "Select a filter to get started"}
      </div>
    </div>
  );
}

export default AlphabetPage;
