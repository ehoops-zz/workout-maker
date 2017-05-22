// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import WorkoutView from './WorkoutView';
import {ChooseWorkout} from './ChooseWorkout';
import CreateWorkoutPage from './CreateWorkoutPage';
import ExistingWorkoutPage from './ExistingWorkoutPage';
//const ChooseWorkout = require('./ChooseWorkout');

const App = (): React$Element<*> => (
  <BrowserRouter>
    <div>
      <div className="col-md-4 text-center">
        <Link to="/" className="btn btn-default">Home</Link>
        <Link to="/workouts" className="btn btn-default">Workouts</Link>
      </div>

      <Route exact path="/" component={CreateWorkoutPage} />
      <Route path="/workouts" component={ChooseWorkout} />
      <Route path="/workout/:workoutID" component={ExistingWorkoutPage} />

    </div>
  </BrowserRouter>
)

module.exports = App;
