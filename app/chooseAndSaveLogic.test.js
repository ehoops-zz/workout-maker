const {chooseExercise, rerollWorkout} = require('./chooseAndSaveLogic');
const _ = require('underscore');
const allExercises = require('./exercises');

const allCategories = _.uniq(_.flatten(_.map(allExercises, function(exercise) {
  return exercise.categories})));

//console.log(allExercises[0]);
//console.log(_.sample(allExercises, 3));
for (let j = 0; j < 10; j++) {
  for (let i = 0; i < allExercises.length; i++) {
    for (let category of allCategories) {
      test(`choosing next exercise for previous exercise ${allExercises[0].name}, category ${category}`, () => {
        expect(chooseExercise(allExercises[i], category)).toBeDefined();
      });
    }
  }
}
