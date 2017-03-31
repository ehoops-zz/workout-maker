var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');

var Exercise = require('./Exercise');
var allExercises = require('./exercises');


var App = React.createClass({

  getInitialState: function () {
    var initialExercises = _.sample(allExercises, 3);
    var initialCategories = _.map(initialExercises, (ex) => ex.categories[0]);
    return {
      saved: [0, 0, 0],
      exercises: initialExercises,
      categories: initialCategories,
    };
  },

  saveExercise: function (id) {
    var saved = this.state.saved.slice();
    saved[id] = saved[id] ? 0 : 1;
    this.setState({saved});
  },

  setCategory: function (id, newCategory) {
    var categories = this.state.categories.slice();
    categories[id] = newCategory;
    this.setState({categories});
  },

  rerollWorkout: function () {
    var exercises = this.state.exercises.map((exercise, index) => {
        if (this.state.saved[index]) {
          return exercise;
        } else {
          return this.chooseExercise(exercise, this.state.categories[index]);
        }
      }
    );
    this.setState({exercises});
  },

  chooseExercise: function (currentExercise, category) {
    var categoryExercises = _.filter(allExercises, function (ex) {
      return _.contains(ex.categories, category);
    });
    return _.sample(_.reject(categoryExercises, function (ex) {
      return ex === currentExercise;
    }));
  },

  render: function () {
    var workout = this.state.exercises.map((exercise, index) =>
      <Exercise
        onSaveToggle={() => this.saveExercise(index)}
        onCategoryChange={(category) => this.setCategory(index, category)}
        allExercises={allExercises}
        exercise={this.state.exercises[index]}
        key={index}
        saved={this.state.saved[index]}/>
    );
    return (
      <div>
        <h1>
          Your randomized workout:
        </h1>
        {workout}

        <button onClick={this.rerollWorkout}>
          Reroll Workout
        </button>

      </div>
    );
  },
});

module.exports = App;
