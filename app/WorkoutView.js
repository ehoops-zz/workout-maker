var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');

var Jumbotron = require('react-bootstrap').Jumbotron;
var Panel = require('react-bootstrap').Panel;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;
var Button = require('react-bootstrap').Button;
var Grid = require('react-bootstrap').Grid;

var Exercise = require('./Exercise');
var allExercises = require('./exercises');
const {chooseExercise, rerollWorkout, saveWorkout} =
  require('./chooseAndSaveLogic');


var WorkoutView = React.createClass({

  getInitialState: function () {
    var exercises = this.props.initialExercises ||
                           _.sample(allExercises, 3);
    var categories = _.map(exercises, (ex) => ex.categories[0]);
    var save = this.props.initialExercises ? 1 : 0;
    var saved = _.times(exercises.length, function (){
      return save;
    });
    console.log(saved);
    return {
      saved,
      exercises,
      categories,
    };
  },

  saveExercise: function (id) {
    var saved = this.state.saved.slice();
    saved[id] = saved[id] ? 0 : 1;
    this.setState({saved});
  },

  saveWorkoutOnClick: function() {
    saveWorkout(this.state.exercises);
  },

  updateWorkoutOnClick: function () {
    var exercises = rerollWorkout(this.state.exercises,
                    this.state.saved, this.state.categories);
    this.setState({exercises});
  },

  loadWorkout: function(e) {
    e.preventDefault();
    this.props.browserHistory.push('/workouts');
  },

  setCategory: function (id, newCategory) {
    var categories = this.state.categories.slice();
    categories[id] = newCategory;
    this.setState({categories});
  },


  render: function () {
    var workout = this.state.exercises.map((exercise, index) =>
      <ListGroupItem key={index}>
        <Exercise
          onSaveToggle={() => this.saveExercise(index)}
          onCategoryChange={(category) => this.setCategory(index, category)}
          allExercises={allExercises}
          exercise={this.state.exercises[index]}
          category={this.state.categories[index]}
          dropdownKey={index}
          saved={this.state.saved[index]}/>
      </ListGroupItem>
    );
    return (
      <Panel>
        <Jumbotron>
          <h1>Your randomized workout:</h1>
        </Jumbotron>
          <ListGroup>
            {workout}
          </ListGroup>

        <Button
          bsStyle="primary" bsSize="large"
          onClick={this.updateWorkoutOnClick}>
          Reroll Workout
        </Button>

        <Button
          bsStyle="primary" bsSize="large"
          onClick={this.saveWorkoutOnClick}>
          Save Workout
        </Button>

      </Panel>
    );
  },
});

module.exports = WorkoutView;
