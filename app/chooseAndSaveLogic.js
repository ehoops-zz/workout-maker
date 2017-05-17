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

export type workoutObj = {
  exercises: Array<exerciseObj>,
  categories: Array<string>,
  saved: Array<boolean>,
}

export function addExercise(workout: workoutObj): workoutObj {
  const newExercise = chooseExercise();
  workout.exercises.push(newExercise);
  workout.categories.push(newExercise.categories[0]);
  workout.saved.push(false);
  return workout;
}

export function rerollWorkout(workout: workoutObj): Array<exerciseObj> {
  const exercises = workout.exercises.map((exercise, index) => {
      if (workout.saved[index]) {
        return exercise;
      } else {
        // chooseExercise will return undefined if there is only one exercise
        // in the given category.  In this case, use the current exercise.
        return (chooseExercise(exercise, workout.categories[index]) || exercise);
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
