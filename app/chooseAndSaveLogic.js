// @flow
import _ from 'underscore';
import {allExercises} from './exercises';
import type {exerciseObj} from './exercises';


export function chooseExercise(currentExercise?: exerciseObj,
                               category?: string): exerciseObj {
  if (category === undefined) {
    let temp = _.sample(allExercises);
    console.log(temp);
    return temp;
  }
  const categoryExercises: Array<exerciseObj> =
                            _.filter(allExercises, function (ex) {
    return _.contains(ex.categories, category);
  });
  return _.sample(_.reject(categoryExercises, function (ex: exerciseObj) {
    return ex === currentExercise;
  }));
}

export type exercisePanelObj = {
  exercise: exerciseObj,
  category: string,
  saved: boolean,
}

export function addExercise(workout: Array<exercisePanelObj>): Array<exercisePanelObj> {
  const newExercise = chooseExercise();
  const newExercisePanel = {
    exercise: newExercise,
    category: newExercise.categories[0],
    saved: false,
  }
  workout.push(newExercisePanel);
  return workout;
}

export function deleteExercise(workout: Array<exercisePanelObj>, index: number) {
  workout.splice(index, 1);
  return workout;
}

export function rerollWorkout(workout: Array<exercisePanelObj>): Array<exercisePanelObj> {
  const newWorkout = _.map(workout, (exPanel) => {
    if (exPanel.saved) {
      return exPanel;
    } else {
      // chooseExercise will return undefined if there is only one exercise
      // in the given category.  In this case, use the current exercise.
      let newEx = chooseExercise(exPanel.exercise, exPanel.category) || exPanel.exercise;
      exPanel.exercise = newEx;
      return exPanel;
    }
  })
  return newWorkout;
}

export function saveWorkout(exerciseArray: Array<exerciseObj>) {
  const workoutName = window.prompt('Enter workout name: ');
  console.log(`Saving workout as ${workoutName}`);
  const params = {method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  workoutName,
                  exerciseList: exerciseArray,
                })
              }
  fetch('/api/save_workout', params)
    .then(
      function(response) {
        console.log('made request');
        if (response.ok) {
          console.log(response);
        } else {
          console.log(`Response status not OK.  Got: ${response.status}`);
        }
      }
    )
    .catch(function(error) {
      console.log(`There was an error with your request: ${error}`);
    });
}
