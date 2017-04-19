const _ = require('underscore');
const allExercises = require('./exercises');


function chooseExercise(currentExercise, category) {
  const categoryExercises = _.filter(allExercises, function (ex) {
    return _.contains(ex.categories, category);
  });
  return _.sample(_.reject(categoryExercises, function (ex) {
    return ex === currentExercise;
  }));
}

function rerollWorkout(exerciseArray, savedArray, categoryArray) {
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

function saveWorkout(exerciseArray) {
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

module.exports = {
  chooseExercise,
  rerollWorkout,
  saveWorkout
};
