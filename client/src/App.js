import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';

import Homepage from './pages/Homepage';
import CalorieTracker from './pages/CalorieTracker';
import Analysis from './pages/Analysis';
import Recipes from './pages/Recipes';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Exercises from './pages/Exercise';
import Donation from './pages/Donation';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
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
              <Route
                path='/signup'
                element={<Signup />}
              />
              <Route
                path='/login'
                element={<Login />}
              />
              <Route
                path='/dashboard'
                element={<Dashboard />}
              />
              <Route
                path='/exercise'
                element={<Exercises />}
              />
              <Route
                path='/donation'
                element={<Donation />}
              />
            </Routes>
        </Router>
    </ApolloProvider>
  );
}

export default App;
