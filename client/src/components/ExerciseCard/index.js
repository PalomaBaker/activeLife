import React from "react";
import Auth from '../../utils/auth';

import { useMutation } from "@apollo/client";

const ExerciseCard = (props) => {

    return (
        <div className="relative w-80 rounded overflow-hidden shadow-lg bg-white">
            <img src={props.gif} alt="exercise_image" />
        </div>
    )
}

export default ExerciseCard;