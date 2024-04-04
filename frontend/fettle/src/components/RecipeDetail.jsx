// RecipeDetails.js

import React ,{ useEffect }from 'react'
import { useParams } from 'react-router-dom';
import './RecipeDetail.css';
import { recipie } from './recipe.js';

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const RecipeDetails = () => {
    const navigate=useNavigate()
    axios.defaults.withCredentials=true;
    
    useEffect(()=>{
      axios({
        url: "http://localhost:8000/verify",
        method: "GET",
      })
        .then(res=>{
            if(res.data.status){

            }
            else{
                navigate('/login')
            }
        })
    },[])
  const recipes = recipie;
  let { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.Recipe_id === parseInt(id));

  if (!recipe) {
    return <div className="recipe-details">Recipe not found</div>;
  }

  return (
    <div className="recipe-details-container">


    <div className="recipe-details">
      <div className="recipe-header">
        <div className="recipe-header-content">
          <h1>{recipe.Recipe_name}</h1>
          <div className="recipe-nutrition">
            <div><strong>Protein (g):</strong> {recipe['Protein(in grams)']}</div>
            <div><strong>Carbohydrates:</strong> {recipe.Carbohydrates}</div>
            <div><strong>Fat (g):</strong> {recipe['Fat(in gram)']}</div>
            <div><strong>Fiber:</strong> {recipe.Fiber}</div>
          </div>
        </div>
        <div className="recipe-image-container">
          <img className="recipe-image" src={recipe.Recipe_image} alt={recipe.Recipe_name} />
        </div>
      </div>
      <div className="recipe-contents">
        <div className="recipe-details-item">
          <strong>Recipe Ingredients:</strong>
          <ul>
            {recipe.Recipe_ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="recipe-details-item">
          <strong>Recipe:</strong>
          <ol>
            {recipe.Recipe.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RecipeDetails;
