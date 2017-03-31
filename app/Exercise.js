var React = require('react');
var _ = require('underscore');

var Exercise = React.createClass({

  handleCategoryChange: function (e) {
    this.props.onCategoryChange(e.target.value);
  },

  render: function () {
    var exercise = this.props.exercise;
    var background = this.props.saved ? 'blue' : 'gray';

    var allExercises = this.props.allExercises;
    var allCategories = _.uniq(_.flatten(_.map(allExercises, function(exercise) {
      return exercise.categories})));
    var categoryDropdown = _.map(allCategories, function(category) {
      return <option key={category} value={category}>{category}</option>
    });

    return (
      <div>
        <div>Exercise: {exercise.name}</div>
        <div>Categories: {exercise.categories.join(', ')}</div>

        <div>
          <select
            onChange={this.handleCategoryChange}>
            {categoryDropdown}
          </select>
        </div>

        <button
          style={{backgroundColor: background}}
          onClick={this.props.onSaveToggle}>
          Save Exercise </button>
      </div>
    );
  },
});

module.exports = Exercise;
