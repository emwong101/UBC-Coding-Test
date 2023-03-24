import { Modal } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import "./ItemCard.scss";

function ItemCard({ image, name, drink, drinkID }) {
  const [open, setOpen] = useState(false);
  const [individualDrink, setIndividualDrink] = useState({});
  const ingredients = [];
  const measurements = [];

  const pushInfo = (drink) => {
    for (let i = 1; i <= 15; i++) {
      ingredients.push(drink[`strIngredient` + String(i)]);
      measurements.push(drink[`strMeasure` + String(i)]);
    }
  };

  const getDrinkInfo = async (drinkID) => {
    await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`
      )
      .then((res) => setIndividualDrink(res.data.drinks[0]))
      .then(pushInfo(individualDrink));
  };

  const handleOpen = () => {
    drink ? pushInfo(drink) : getDrinkInfo(drinkID);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="card" onClick={handleOpen}>
        <div className="card__image">
          <img src={image} alt={name} />
        </div>
        <div className="card__name">
          <h5>{name}</h5>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        className="modal"
      >
        <>
          <div className="modal__top">
            <img src={image} alt={name} className="modal__image" />
          </div>
          <div>
            <h4>Name</h4>
            <p>{name}</p>
            {drink ? (
              <>
                <h4>Ingredients</h4>
                {ingredients.map((ingredient, index) => {
                  if (ingredient !== null) {
                    return (
                      <p key={ingredient}>
                        {`${measurements[index] ? measurements[index] : ""}
                    ${ingredient}`}
                      </p>
                    );
                  }
                })}
                <h4>Instructions</h4>
                <p>{drink.strInstructions}</p>
              </>
            ) : (
              <>
                <h4>Ingredients</h4>
                {ingredients.map((ingredient, index) => {
                  if (ingredient !== null) {
                    return (
                      <p key={ingredient}>
                        {`${measurements[index] ? measurements[index] : ""}
                    ${ingredient}`}
                      </p>
                    );
                  }
                })}
                <h4>Instructions</h4>
                <p>{individualDrink.strInstructions}</p>
              </>
            )}
          </div>
        </>
      </Modal>
    </div>
  );
}

export default ItemCard;
