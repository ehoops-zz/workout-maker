const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const Link = require('react-router-dom').Link;
const WorkoutView = require('./WorkoutView');
const ChooseWorkout = require('./ChooseWorkout');
const CreateWorkoutPage = require('./CreateWorkoutPage');
const ExistingWorkoutPage = require('./ExistingWorkoutPage');

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
