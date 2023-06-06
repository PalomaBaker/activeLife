import React, { useState } from "react";

import axios from 'axios';
import './tracker.css';
import CalorieForm from "../../components/CalorieForm";
//import { useHistory } from 'react-router-dom';

//const stripePromise = loadStripe('pk_live_51Hi60hIQnqXSnBBp5HLjbMVx4jD1Bv7IGhbyrkFYekTcHOfSbdhzPHMCVkDWBPdJ2r5S7Kg4vpSpsSdSR1nxomOc00rVVkJcCo');

const CalorieTracker = () => {
  //const history = useHistory(); 

  function convertHeight(feet, inches) {
    let height = (feet * 12) + inches;
    return height * 2.54;
  };

  function convertWeight(pounds) {
    return (pounds / 2.205);
  };

  const handleForm = (values) => {
    console.log(values);
    const { age, feet, inches, weight } = values;
    const userCentimeters = convertHeight(parseInt(feet), parseInt(inches));
    const userKilos = convertWeight(weight);

    const options = {
      method: 'GET',
      url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
      params: {
        age: age,
        gender: 'male',
        height: userCentimeters,
        weight: userKilos,
        activitylevel: 'level_1'
      },
      headers: {
        'X-RapidAPI-Key': 'e409a1e803msh766fbb1e9b121adp1bdf3cjsn6cf9edfecdb6',
        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
      }
    };

    fetchData(options);
  };

  const fetchData = async (options) => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
  
      const { data } = response.data;
      const maintainWeight = Math.round(data.goals['maintain weight']);
      const gainHalfPound = Math.round(data.goals['Mild weight gain'].calory);
      const gainOnePound = Math.round(data.goals['Weight gain'].calory);
      const loseHalfPound = Math.round(data.goals['Mild weight loss'].calory);
      const loseOnePound = Math.round(data.goals['Weight loss'].calory);
  
      document.getElementById('maintain').textContent = `You need a daily intake of ${maintainWeight} calories to maintain your weight.`;
      document.getElementById('gainOne').textContent = `You need a daily intake of ${gainHalfPound} calories to gain half a pound per week.`;
      document.getElementById('gainTwo').textContent = `You need a daily intake of ${gainOnePound} calories to gain a pound per week.`;
      document.getElementById('loseOne').textContent = `You need a daily intake of ${loseHalfPound} calories to lose half a pound per week.`;
      document.getElementById('loseTwo').textContent = `You need a daily intake of ${loseOnePound} calories to lose a pound per week.`;
  
      document.getElementById('results').classList.remove('calorie-hidden');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <React.Fragment>
      <main>
        <div id="tracker">
          <h1 className="calorie-title">Calorie Tracker</h1>
          <p>Enter your information below to calculate your necessary daily caloric intake</p>
          <CalorieForm onSave={handleForm} />
        </div>
        <div id="results" className="calorie-hidden">
          <h2>Results</h2>
          <ul id="calories">
            <li id="maintain"></li>
            <li id="gainOne"></li>
            <li id="gainTwo"></li>
            <li id="loseOne"></li>
            <li id="loseTwo"></li>
          </ul>
        </div>
      </main>
    </React.Fragment>
  );
};

export default CalorieTracker;