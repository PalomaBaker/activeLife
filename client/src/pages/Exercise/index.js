import React from "react";
import axios from 'axios';
import { useState } from "react";
import ExerciseForm from "../../components/ExerciseForm";
import ExerciseCard from "../../components/ExerciseCard";

const Exercises = () => {
    const [apiData, setAPIData] = useState([]);

    const handleForm = async (values) => {
        const { body_restrict } = values;

        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${body_restrict}`,
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_APIKEY_EXERCISE,
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data.length);
              if (response.data.length > 10) {
                const responseTrimmed = response.data.slice(0,10);
                setAPIData(responseTrimmed);
              } else {
                setAPIData(response.data);
              }
          } catch (error) {
              console.error(error);
          }
    }

    return (
        <>
            <div className="exercise-form">
                <ExerciseForm onSave={handleForm} />
            </div>
            <div className="workout-container flex flex-wrap space-x-10 space-y-10 place-content-center h-fit" id="output">
                {apiData.map((data) => {
                    return (
                        <ExerciseCard gif={data.gifUrl} />
                    )
                })}
            </div>
        </>
    )
}



export default Exercises;