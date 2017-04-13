const {chooseExercise, rerollWorkout} = require('./exerciseSelectionFunctions');
const _ = require('underscore');
const allExercises = require('./exercises');

const allCategories = _.uniq(_.flatten(_.map(allExercises, function(exercise) {
  return exercise.categories})));

//console.log(allExercises[0]);
//console.log(_.sample(allExercises, 3));
for (var j = 0; j < 10; j++) {
  for (var i = 0; i < allExercises.length; i++) {
    for (var category of allCategories) {
      test(`choosing next exercise for previous exercise ${allExercises[0].name}, category ${category}`, () => {
        expect(chooseExercise(allExercises[i], category)).toBeDefined();
      });
    }
  }
}
