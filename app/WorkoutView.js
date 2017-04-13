const React = require('react');
const ReactDOM = require('react-dom');
const _ = require('underscore');

const Jumbotron = require('react-bootstrap').Jumbotron;
const Panel = require('react-bootstrap').Panel;
const ListGroup = require('react-bootstrap').ListGroup;
const ListGroupItem = require('react-bootstrap').ListGroupItem;
const Button = require('react-bootstrap').Button;
const Grid = require('react-bootstrap').Grid;

const Exercise = require('./Exercise');
const allExercises = require('./exercises');
const {chooseExercise, rerollWorkout, saveWorkout} =
  require('./chooseAndSaveLogic');


const WorkoutView = React.createClass({

  getInitialState: function () {
    const exercises = this.props.initialExercises ||
                           _.sample(allExercises, 3);
    const categories = _.map(exercises, (ex) => ex.categories[0]);
    const save = this.props.initialExercises ? 1 : 0;
    const saved = _.times(exercises.length, function (){
      return save;
    });
    const workoutBanner = this.props.initialBanner || "Basketball Workout";

    return {
      saved,
      exercises,
      categories,
      workoutBanner
    };
  },

  saveExercise: function (id) {
    let saved = this.state.saved.slice();
    saved[id] = saved[id] ? 0 : 1;
    this.setState({saved});
  },

  saveWorkoutOnClick: function() {
    saveWorkout(this.state.exercises);
  },

  updateWorkoutOnClick: function () {
    const exercises = rerollWorkout(this.state.exercises,
                    this.state.saved, this.state.categories);
    this.setState({exercises});
  },

  loadWorkout: function(e) {
    e.preventDefault();
    this.props.browserHistory.push('/workouts');
  },

  setCategory: function (id, newCategory) {
    let categories = this.state.categories.slice();
    categories[id] = newCategory;
    this.setState({categories});
  },


  render: function () {
    const workout = this.state.exercises.map((exercise, index) =>
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
          <h1 id="jumboBanner">{this.state.workoutBanner}</h1>
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
