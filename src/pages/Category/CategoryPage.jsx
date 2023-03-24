import React from "react";
import axios from "axios";
import DropDownSelector from "../../components/DropDownSelector/DropDownSelector";
import ItemCard from "../../components/Card/ItemCard";
import "./CategoryPage.scss";

function CategoryPage({ data, setData, selection, setSelection }) {
  //available categories given by API
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

  // get request based on category, spaces in category names replaced with _
  const getCategory = (e) => {
    setSelection(e.target.value);
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
      <label id="category__dropdown">Select a category to get started</label>
      <div className="category__inputs">
        <DropDownSelector
          handleChange={getCategory}
          optionArray={categoryOptions}
          selection={selection}
          id="category__dropdown"
          classes="dropdown dropdown__category"
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
