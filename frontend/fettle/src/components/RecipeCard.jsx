import React from 'react';
import './RecipeCard.css'
const RecipeCard = ({ recipe }) => {
  const {
    Recipe_name,
    Recipe_image,
    Numberofcalories,
    Fiber,
    "Fat(in gram)":Fat,
    Carbohydrates,
    "Protein(in grams)": Protein
  } = recipe;

  return (
    <div className="recipe-card">
      <img src={Recipe_image} alt={Recipe_name} className="recipe-card-image" />
      <div className="recipe-card-details">
        <h2>{Recipe_name}</h2>
        <p>Calories: {Numberofcalories}</p>
        <p>Fiber: {Fiber}</p>
        <p>Fat: {Fat}g</p>
        <p>Carbohydrates: {Carbohydrates}g</p>
        <p>Protein: {Protein}g</p>
      </div>
    </div>
  );
}

export default RecipeCard;
