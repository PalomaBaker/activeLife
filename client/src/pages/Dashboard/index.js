// Homepage HTML
import React from "react";
import './dashboard.css';

import { useQuery } from "@apollo/client";
import { GET_ME, QUERY_USERS } from "../../utils/queries";

import RecipeCard from "../../components/RecipeCard";

const Dashboard = () => {
    const { loading, data } = useQuery(GET_ME);
    const recipes = data?.me.recipes;

    console.log(recipes);

    return (
        <React.Fragment>
            <h1 className="text-4xl ml-8 mt-5 mb-4 font-bold">Favorite Recipes</h1>
            <div className="main-container flex items-center h-full w-full">
                <div className="recipe-container h-120 w-80 bg-white mx-8">
                    {recipes.map((data) => {
                        return (
                            <RecipeCard name={data.name} calories={data.calories} image={data.image} />
                        )
                    })}
                </div>
                <div className="exercise-container">

                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;