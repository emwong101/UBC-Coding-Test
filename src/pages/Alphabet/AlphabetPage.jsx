import React, { useEffect, useState } from "react";
import axios from "axios";
import DropDownSelector from "../../components/DropDownSelector/DropDownSelector";
import ItemCard from "../../components/Card/ItemCard";
import { InputLabel } from "@mui/material";
import "./AlphabetPage.scss";
import ButtonMenu from "../../components/ButtonGroup/ButtonMenu";

function AlphabetPage({ setData, data, selection, setSelection }) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [windowSize, setWindowSize] = useState();

  const getAlphabet = (e) => {
    setSelection(e.target.value);
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e.target.value}`
      )
      .then((res) => setData(res.data.drinks));
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="alphabet">
      <div className="alphabet__inputs">
        <InputLabel id="alphabet__dropdown">
          Select a letter to get started
        </InputLabel>
        <DropDownSelector
          id="alphabet__dropdown"
          handleChange={getAlphabet}
          optionArray={alphabet}
          selection={selection}
        ></DropDownSelector>
        <ButtonMenu optionArray={alphabet} />
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
