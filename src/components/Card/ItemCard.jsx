import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ItemCard.scss";

function ItemCard({ image, name, drink, drinkID }) {
  //state for modal open and close
  const [open, setOpen] = useState(false);

  //state for drink based on ID fetch request
  const [individualDrink, setIndividualDrink] = useState({});

  //empty arrays for ingredients and measurements
  const ingredients = [];
  const measurements = [];

  // loop through object and push ingredients + measurements
  const pushInfo = (arr) => {
    for (let i = 1; i <= 15; i++) {
      ingredients.push(arr[`strIngredient` + String(i)]);
      measurements.push(arr[`strMeasure` + String(i)]);
    }
  };

  // get request for category drinks
  const getDrinkInfo = async (drinkID) => {
    await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`
      )
      .then((res) => setIndividualDrink(res.data.drinks[0]));
  };

  // check if drink prop exists
  drink ? pushInfo(drink) : pushInfo(individualDrink);

  // functions for open and close modal
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // check if drink prop exists, if not, run get request
  useEffect(() => {
    drink ? "" : getDrinkInfo(drinkID);
  }, []);

  return (
    <>
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
          <div className="modal__text">
            <h4 className="modal__heading">Name</h4>
            <p className="modal__body">{name}</p>
            {drink ? (
              <>
                <h4 className="modal__heading">Ingredients</h4>
                <ul>
                  {ingredients.map((ingredient, index) => {
                    if (ingredient !== null) {
                      return (
                        <li className="modal__body" key={ingredient}>
                          {`${measurements[index] ? measurements[index] : ""}
                    ${ingredient}`}
                        </li>
                      );
                    }
                  })}
                </ul>
                <h4 className="modal__heading">Instructions</h4>
                <p className="modal__body">{drink.strInstructions}</p>
              </>
            ) : (
              <>
                <h4 className="modal__heading">Ingredients</h4>
                {ingredients.map((ingredient, index) => {
                  if (ingredient !== null) {
                    return (
                      <p className="modal__body" key={index}>
                        {`${measurements[index] ? measurements[index] : ""}
                    ${ingredient}`}
                      </p>
                    );
                  }
                })}
                <h4 className="modal__heading">Instructions</h4>
                <p className="modal__body">{individualDrink.strInstructions}</p>
              </>
            )}
          </div>
        </>
      </Modal>
    </>
  );
}

export default ItemCard;
