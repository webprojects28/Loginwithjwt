import React ,{ useEffect }from 'react'
import { recipie } from './recipe.js'
import './DietPlanner.css';
import { Link, useNavigate } from "react-router-dom";
import RecipeCard from './RecipeCard.jsx';
import axios from "axios";
function DietPlanner() {
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
  return (
  
      <div className="recipe-list">
        {recipie.map((recipe,index) => (
           <Link class=" link-content" to={`/recipe/${recipe.Recipe_id}`}> 
              <RecipeCard key={index} recipe={recipe}/>    
           </Link>
        ))}
      </div>

   
  )
}

export default DietPlanner