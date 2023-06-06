import React from "react";
import './exercise.css';
import ExerciseForm from "../../components/ExerciseForm";

const Exercises = () => {
    const form = document.querySelector('form');

    const input1 = document.querySelector('#input1');
    
    return(
    
    
    
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // prevent the form from submitting
      const userSelect = input1.value
      // equipment:input2.value
      window.scrollBy(0, 500);
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e8fdd89474msh3544bb1498b2f9dp1fd4bejsn1ba06bcbdd3a',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
    
    
      function displayWorkout(response) {
        const workoutDiv = document.getElementById("output");
        let exerciseContainer = workoutDiv.innerHTML = "";;
        for (let i = 0; i < response.length; i++) {
          const cardContainer = document.createElement("div");
    
          const workout = response[i];
          cardContainer.className = "max-w-xs overflow-hidden shadow-lg shadow-cyan-300 grid-rows-2";
    
          let workoutName = workout.name;
          let header = document.createElement("h1");
          header.className = "text-cyan-600 text-xl";
          header.innerHTML = workoutName;
    
          let workoutGif = workout.gifUrl;
          let workoutImg = document.createElement("img");
          workoutImg.className = "w-full";
          workoutImg.src = workoutGif;
    
          let workoutEuip = workout.equipment;
          let section = document.createElement("p");
          section.className = "text-base"
          section.innerHTML = workoutEuip;
    
    
          cardContainer.append(workoutImg);
          cardContainer.append(header);
          cardContainer.append(section);
          workoutDiv.append(cardContainer);
    
        }
        return exerciseContainer;
    
      }
    
      fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${userSelect}`, options)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          displayWorkout(response)
    
        })
        .catch(err => console.error(err));
    })
    )}
    
       



export default Exercises;