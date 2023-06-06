// Homepage HTML
import React from "react";
import './homepage.css';

const Homepage = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="box">
                    <div className="content">
                        <div className="title">Calorie Tracker </div>
                            Generate the daily amount of calories your body needs!
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded page-btn" id="calorie-tracker">
                                Calorie Tracker
                            </button>
                    </div>
                </div>
                <div className="box">
                    <div className="content">
                        <div className="title">Nutrition Analysis</div>
                            Get the nutritional data of your food based on the measurmeants of single ingredients 
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded page-btn" id="nutrition-analysis">
                                Nutrition Analysis
                            </button>

                    </div>
                </div>
                <div className="box">
                    <div className="content">
                        <div className="title">Recipe Generator</div>
                            Access recipes based on your goals and preferences 
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded page-btn" id="recipes">
                                Recipes
                            </button>
                    </div>
                </div>
                <div className="box">
                    <div className="content">
                        <div className="title">Exercises</div>
                            View exercises targeted towards specific body parts 
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded page-btn" id="recipes">
                                Exercises
                            </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Homepage;