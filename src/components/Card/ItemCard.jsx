import React from "react";
import "./ItemCard.scss";

function ItemCard({ image, name }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt={name} />
      </div>
      <div className="card__name">
        <h5>{name}</h5>
      </div>
    </div>
  );
}

export default ItemCard;
