var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');

var Exercise = require('./Exercise');
var Reroll = require('./Reroll');
var exercises = require('./exercises');


var App = React.createClass({

  getInitialState: function () {
    var initialExercises = _.sample(exercises, 3);
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
    var categoryExercises = _.filter(exercises, function (ex) {
      return ex.categories.includes(category);
    });
    return _.sample(_.reject(categoryExercises, function (ex) {
      return ex === currentExercise;
    }));
  },

  render: function () {
    var workout = this.state.exercises.map((exercise, index) =>
      <Exercise
        onClick={() => this.saveExercise(index)}
        onChange={(category) => this.setCategory(index, category)}
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
        <Reroll
          onClick={this.rerollWorkout}
        />
      </div>
    );
  },
});

module.exports = App;
