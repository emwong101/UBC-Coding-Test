import React, { useState } from "react";
import axios from "axios";
import DropDownSelector from "../../components/DropDownSelector/DropDownSelector";
import ItemCard from "../../components/Card/ItemCard";

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
  const categoryRequests = ["Ordinary_Drink", "Cocktail", "Shake", ""];
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

  console.log(data);
  return (
    <div>
      {" "}
      <DropDownSelector
        handleChange={getCategory}
        optionArray={categoryOptions}
        selection={category}
      ></DropDownSelector>
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
  );
}

export default CategoryPage;
