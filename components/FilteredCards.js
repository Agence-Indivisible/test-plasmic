import React from "react";

const FilteredCards = ({ cards = [] }) => {
  console.log(cards)
  return (
    <div className="card-container">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <h3>{card.name}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FilteredCards;