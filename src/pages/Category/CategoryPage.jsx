import React, { useState } from "react";
import axios from "axios";
import DropDownSelector from "../../components/DropDownSelector/DropDownSelector";
import ItemCard from "../../components/Card/ItemCard";
import { InputLabel } from "@mui/material";
import "./CategoryPage.scss";

function CategoryPage({ data, setData }) {
  const categoryOptions = [
    "Ordinary Drink",
    "Cocktail",
    "Shake",
    "Other / Unknown",
    "Cocoa",
    "Shot",
    "Coffee / Tea",
    "Homemade Liqueur",
    "Punch / Party Drink",
    "Beer",
    "Soft Drink",
  ];
  const [category, setCategory] = useState();
  const [drinkID, setDrinkID] = useState();

  const getCategory = (e) => {
    setCategory(e.target.value);
    const categoryRequest = e.target.value;
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryRequest.replace(
          / /g,
          "_"
        )}`
      )
      .then((res) => setData(res.data.drinks));
  };

  return (
    <div className="category">
      <div className="category__inputs">
        <InputLabel id="category__dropdown">
          Select a category to get started
        </InputLabel>
        <DropDownSelector
          handleChange={getCategory}
          optionArray={categoryOptions}
          selection={category}
          id="category__dropdown"
        ></DropDownSelector>
      </div>
      <div className="card__container">
        {data
          ? data.map((drink) => {
              return (
                <ItemCard
                  image={drink.strDrinkThumb}
                  name={drink.strDrink}
                  key={drink.idDrink}
                  drinkID={drink.idDrink}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default CategoryPage;
