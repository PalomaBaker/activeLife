import React from "react";
//import './exercise.css';
import ExerciseForm from "../../components/ExerciseForm";

const Exercises = () => {
    const handleForm = () => {
        const form = document.querySelector('form');
        const input1 = document.querySelector('#input1');
        const cardContainer = document.createElement("div");
    }

    return (
        <div className="workout-container flex flex-wrap space-x-10 space-y-10 place-content-center" id="output">
            <ExerciseForm onSave={handleForm} />
        </div>
    )
}



export default Exercises;