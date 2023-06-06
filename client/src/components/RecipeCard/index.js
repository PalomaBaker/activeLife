import React from "react";
import Auth from '../../utils/auth';

import { useMutation } from "@apollo/client";
import { ADD_RECIPE } from "../../utils/mutations";

const RecipeCard = (props) => {
    const [addRecipe, { error }] = useMutation(ADD_RECIPE);

    const getCard = async () => {
        const recipeName = props.name;
        const recipeCalories = props.calories;
        const recipeImage = props.image;

        try {
            const { data } = await addRecipe({
                variables: { recipeName, recipeCalories, recipeImage }
            });
            console.log(data);
        } catch (err) {
            console.log(error);
        }
    }

    return (
        <div className="relative w-80 rounded overflow-hidden shadow-lg bg-white my-2 ">
            <img className="w-full" src={props.image} alt="Food_image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-1">{props.name}</div>
                <p className="text-gray-700 text-base">
                Amount: {props.calories} cal.
                </p>
            </div>
            {Auth.loggedIn() ? (
                <button className="absolute bottom-3 right-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded save-btn" onClick={getCard}>
                Save Recipe
                </button>
            ): (
                <h4 className="absolute bottom-0.5 left-6">Login to save recipe!</h4>
            )}
        </div>
    )
}

export default RecipeCard;