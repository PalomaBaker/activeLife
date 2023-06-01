import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';

import Homepage from './pages/Homepage';
import CalorieTracker from './pages/CalorieTracker';
import Analysis from './pages/Analysis';
import Recipes from './pages/Recipes';

function App() {
  return (
    <React.Fragment>
        <Router>
            <Navbar />
            <Routes>
              <Route
                path='/'
                element={<Homepage />}
              />
              <Route
                path='/calorie-tracker'
                element={<CalorieTracker />}
              />
              <Route
                path='/analysis'
                element={<Analysis />}
              />
              <Route
                path='/recipes'
                element={<Recipes />}
              />
            </Routes>
        </Router>
    </React.Fragment>
  );
}

export default App;
