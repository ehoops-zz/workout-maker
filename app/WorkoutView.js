// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

const Jumbotron = require('react-bootstrap').Jumbotron;
const Panel = require('react-bootstrap').Panel;
const ListGroup = require('react-bootstrap').ListGroup;
const ListGroupItem = require('react-bootstrap').ListGroupItem;
const Button = require('react-bootstrap').Button;
const Grid = require('react-bootstrap').Grid;

import Exercise from './Exercise';
import {allExercises} from './exercises';
import type {exerciseObj} from './exercises';
import {chooseExercise, addExercise, rerollWorkout, saveWorkout} from './chooseAndSaveLogic';
import type {workoutObj} from './chooseAndSaveLogic';


const WorkoutView = React.createClass({
  getInitialState: function (): {workout: workoutObj,
                                 workoutBanner: string }{
    const exercises = this.props.initialExercises ||
                           _.sample(allExercises, 3);
    const categories = _.map(exercises, (ex) => ex.categories[0]);
    const save = this.props.initialExercises ? true : false;
    const saved = _.times(exercises.length, function (){
      return save;
    });
    const workoutBanner = this.props.initialBanner || "Basketball Workout";

    const workout = {
      exercises: exercises,
      categories: categories,
      saved: saved,
    }

    return {
      workout,
      workoutBanner
    };
  },

  saveExercise: function (id) {
    let workout = this.state.workout;
    let saved = workout.saved.slice();
    saved[id] = saved[id] ? false : true;
    workout.saved = saved;
    this.setState({workout});
  },

  saveWorkoutOnClick: function() {
    saveWorkout(this.state.workout.exercises);
  },

  updateWorkoutOnClick: function () {
    let workout = this.state.workout;
    const exercises: Array<exerciseObj> = rerollWorkout(this.state.workout);
    workout.exercises = exercises;
    this.setState({workout});
  },

  addExerciseOnClick: function () {
    console.log('add exercise clicked');
    const workout = addExercise(this.state.workout);
    this.setState({workout});
  },

  loadWorkout: function(e) {
    e.preventDefault();
    this.props.browserHistory.push('/workouts');
  },

  setCategory: function (id, newCategory) {
    let workout = this.state.workout;
    let categories: Array<string> = workout.categories.slice();
    categories[id] = newCategory;
    workout.categories = categories;
    this.setState({workout});
  },


  render: function (): React$Element<*> {
    const workout = this.state.workout;
    const workoutTime = workout.exercises.reduce((acc, val) => {
      return acc + val.time;
    }, 0);
    const workoutList = workout.exercises.map((exercise, index) =>
      <ListGroupItem key={index}>
        <Exercise
          onSaveToggle={() => this.saveExercise(index)}
          onCategoryChange={(category) => this.setCategory(index, category)}
          allExercises={allExercises}
          exercise={workout.exercises[index]}
          category={workout.categories[index]}
          dropdownKey={index}
          saved={workout.saved[index]}/>
      </ListGroupItem>
    );
    return (
      <Panel>
        <Jumbotron>
          <h1 id="jumboBanner">{this.state.workoutBanner}</h1>
          <p>{`Workout Time: ${workoutTime}`}</p>
        </Jumbotron>
          <ListGroup>
            {workoutList}
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

        <Button
          bsStyle="primary" bsSize="large"
          onClick={this.addExerciseOnClick}>
          Add Exercise
        </Button>

      </Panel>
    );
  },
});

module.exports = WorkoutView;
