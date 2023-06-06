// Recipes HTML
import React, { useState, useRef } from "react";
import RecipeForm from "../../components/RecipeForm";
import axios from 'axios';
import './recipes.css';

import Auth from '../../utils/auth';
import RecipeCard from "../../components/RecipeCard";

const Recipes = () => {
    const recipeRef = useRef(null);
    const [formData, setFormData] = useState([]);

    const handleForm = (values) => {
        const { dish_origin, dish_type, dish_time, dish_restrict, calorie_max } = values;
        
        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
            params: {
              query: dish_type,
              cuisine: dish_origin,
              maxReadyTime: dish_time,
              type: 'main course',
              minCalories: 50,
              maxCalories: calorie_max,
              number: '10', // default value for number
              ranking: '2' // default value for ranking
            },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_APIKEY_RECIPE,
              'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
          };
    
        console.log(values);
        fetchRecipes(options);
    }

    const fetchRecipes = async (options) => {
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setFormData(response.data.results);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <React.Fragment>
            <div id="content-wrapper">
                <header className="recipe-header">
                    <h2> Search Through Our Recipe Database!</h2>
                </header>
                <div className="w-full max-w-xs flex form-card">
                    <RecipeForm onSave={handleForm}/>
                </div>
        
                <div className="recipe-container flex-auto" id="output">
                    {formData.map((data) =>{
                        const recipeName = data.title;
                        const recipeCalories = data.nutrition.nutrients[0].amount;
                        const recipeImg = data.image;

                        return (
                            <RecipeCard name={recipeName} calories={recipeCalories} image={recipeImg} />
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Recipes;