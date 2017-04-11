var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;
var WorkoutView = require('./WorkoutView');
var ChooseWorkout = require('./ChooseWorkout');
var CreateWorkoutPage = require('./CreateWorkoutPage');
var ExistingWorkoutPage = require('./ExistingWorkoutPage');

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/workouts">Workouts</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={CreateWorkoutPage} />
      <Route path="/workouts" component={ChooseWorkout} />
      <Route path="/workout/:workoutID" component={ExistingWorkoutPage} />

    </div>
  </Router>
)

module.exports = App;
