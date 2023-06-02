// Recipes HTML
import React, { useState } from "react";
import RecipeForm from "../../components/RecipeForm";
import axios from 'axios';
import './recipes.css';

const Recipes = () => {
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
                    <h2> Search Through Our Reciepe Database!</h2>
                </header>
                <div className="w-full max-w-xs flex form-card">
                    <RecipeForm onSave={handleForm}/>
                </div>
        
                <div className="recipe-container" id="output">
                    {formData.map((data) =>{
                        return (
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src={data.image} alt="Food_image" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{data.title}</div>
                                    <p className="text-gray-700 text-base">
                                    Amount: {data.nutrition.nutrients[0].amount}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
        
            </div>
        </React.Fragment>
    )
}

export default Recipes;