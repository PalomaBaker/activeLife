import React, { useState } from "react";
import axios from 'axios';
import './tracker.css';
import CalorieForm from "../../components/CalorieForm";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';

const stripePromise = loadStripe('pk_live_51Hi60hIQnqXSnBBp5HLjbMVx4jD1Bv7IGhbyrkFYekTcHOfSbdhzPHMCVkDWBPdJ2r5S7Kg4vpSpsSdSR1nxomOc00rVVkJcCo');

const CalorieTracker = () => {
  const history = useHistory(); 

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
  };

  const fetchData = async (options) => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
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

          <Elements stripe={stripePromise}>
            <StripePaymentForm />
          </Elements>

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

const StripePaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe library hasn't loaded yet, or elements not initialized
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      // Payment success
      setPaymentSuccess(true);

      // Redirect the user back to the Calorie Tracker page
      history.push('/calorie-tracker');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default CalorieTracker;
