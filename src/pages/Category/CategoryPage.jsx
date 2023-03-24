import React, { useState } from "react";
import axios from "axios";
import DropDownSelector from "../../components/DropDownSelector/DropDownSelector";
import ItemCard from "../../components/Card/ItemCard";
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
      <DropDownSelector
        handleChange={getCategory}
        optionArray={categoryOptions}
        selection={category}
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
          : "Welcome to the Cocktail Bar! Select a category to get started"}
      </div>
    </div>
  );
}

export default CategoryPage;
