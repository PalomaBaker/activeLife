// Calorie Tracker HTML
import React from "react";
import './tracker.css';

const CalorieTracker = () => {
    return (
        <React.Fragment>
            <main>
                <div id="tracker">
                    <h1 className="calorie-title">Calorie Tracker</h1>
                    <p>Enter your information below to calculate 
                    your neccessary daily caloric intake</p>
                    <ul className="calorie-input">
                        <li>Age
                            <input id="age"></input>
                        </li>
                        <li>Height
                            <input id="feet" placeholder="ft."></input>
                            <input id="inches" placeholder="in."></input>
                        </li>
                        <li>Weight
                            <input id="weight" placeholder="lbs."></input>
                        </li>
                    </ul>
                    <button id="calculate">Calculate</button>
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