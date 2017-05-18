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
import {chooseExercise, addExercise, deleteExercise,
  rerollWorkout, saveWorkout} from './chooseAndSaveLogic';
import type {exercisePanelObj} from './chooseAndSaveLogic';


const WorkoutView = React.createClass({
  getInitialState: function (): {workout: Array<exercisePanelObj>,
                                 workoutBanner: string }{
    const exercises = this.props.initialExercises ||
                           _.sample(allExercises, 3);
    const categories = _.map(exercises, (ex) => ex.categories[0]);
    const save = this.props.initialExercises ? true : false;
    const saved = _.times(exercises.length, function (){
      return save;
    });

    const workout = _.map(exercises, (ex, ind) => {
      return {
        exercise: ex,
        category: categories[ind],
        saved: saved[ind],
      }
    })

    const workoutBanner = this.props.initialBanner || "Basketball Workout";

    return {
      workout,
      workoutBanner
    };
  },

  saveExercise: function (id) {
    let workout = this.state.workout;
    workout[id].saved = workout[id].saved ? false : true;
    this.setState({workout});
  },

  saveWorkoutOnClick: function() {
    const exercises = _.map(this.state.workout, (exPanel) => {
      return exPanel.exercise;
    })
    saveWorkout(exercises);
  },

  updateWorkoutOnClick: function () {
    let prevWorkout = this.state.workout;
    const workout = rerollWorkout(prevWorkout);
    this.setState({workout});
  },

  addExerciseOnClick: function () {
    const workout = addExercise(this.state.workout);
    this.setState({workout});
  },

  deleteExerciseOnClick: function (e) {
    const id = e.target.id
    const index = id.indexOf('-');
    if (index === -1 || index >= id.length - 1) {
      console.log('invalid delete button id');
      return;
    }
    const idNumber = parseInt(id.slice(index+1));
    const workout = deleteExercise(this.state.workout, idNumber);
    this.setState({workout});
  },

  loadWorkout: function(e) {
    e.preventDefault();
    this.props.browserHistory.push('/workouts');
  },

  setCategory: function (id, newCategory) {
    let workout = this.state.workout;
    workout[id].category = newCategory;
    this.setState({workout});
  },


  render: function (): React$Element<*> {
    const workout = this.state.workout;
    const workoutTime = _.reduce(workout, (acc, exPanel) => {
      return acc + exPanel.exercise.time;
    }, 0);
    const workoutList = _.map(workout, (exPanel, index) =>
      <ListGroupItem key={index}>
        <Exercise
          onSaveToggle={() => this.saveExercise(index)}
          onCategoryChange={(category) => this.setCategory(index, category)}
          allExercises={allExercises}
          exercise={exPanel.exercise}
          workoutIndex={index}
          category={exPanel.category}
          dropdownKey={index}
          saved={exPanel.saved}
          onDeleteExercise={this.deleteExerciseOnClick}/>
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
