// @flow
import _ from 'underscore';
import {allExercises} from './exercises';
import type {exerciseObj} from './exercises';


export function chooseExercise(currentExercise: exerciseObj,
                               category: string): exerciseObj {
  const categoryExercises: Array<exerciseObj> =
                            _.filter(allExercises, function (ex) {
    return _.contains(ex.categories, category);
  });
  return _.sample(_.reject(categoryExercises, function (ex: exerciseObj) {
    return ex === currentExercise;
  }));
}

export function rerollWorkout(exerciseArray: Array<exerciseObj>,
                       savedArray: Array<boolean>,
                       categoryArray: Array<string>): Array<exerciseObj> {
  const exercises = exerciseArray.map((exercise, index) => {
      if (savedArray[index]) {
        return exercise;
      } else {
        // chooseExercise will return undefined if there is only one exercise
        // in the given category.  In this case, use the current exercise.
        return (chooseExercise(exercise, categoryArray[index]) || exercise);
      }
    }
  );
  return exercises;
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
