// Calorie Tracker HTML
import React from "react";
import axios from 'axios';
import './tracker.css';
import CalorieForm from "../../components/CalorieForm";

const CalorieTracker = () => {

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
            url: 'https://calorie-calculator.p.rapidapi.com/caloriecalculator.php',
            params: {
              age: age,
              height: userCentimeters,
              weight: userKilos
            },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_APIKEY_TRACKER,
              'X-RapidAPI-Host': 'calorie-calculator.p.rapidapi.com'
            }
          };

        fetchData(options);
    }

    const fetchData = async (options) => {
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <React.Fragment>
            <main>
                <div id="tracker">
                    <h1 className="calorie-title">Calorie Tracker</h1>
                    <p>Enter your information below to calculate 
                    your neccessary daily caloric intake</p>
                    <CalorieForm onSave={handleForm}/>
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
    )
}

export default CalorieTracker;