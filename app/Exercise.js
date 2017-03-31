var React = require('react');
var _ = require('underscore');

var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;
var Button = require('react-bootstrap').Button;

var Exercise = React.createClass({

  handleCategoryChange: function (evtKey, evt) {
    this.props.onCategoryChange(evtKey);
  },

  render: function () {
    var exercise = this.props.exercise;
    var background = this.props.saved ? 'blue' : 'gray';

    var allExercises = this.props.allExercises;
    var allCategories = _.uniq(_.flatten(_.map(allExercises, function(exercise) {
      return exercise.categories})));
    var categoryDropdown = _.map(allCategories, function(category) {
      return <MenuItem
        eventKey={category}
        key={category}
        value={category}> {category} </MenuItem>
    });

    return (
      <div>
        <div>Exercise: {exercise.name}</div>
        <div>Categories: {exercise.categories.join(', ')}</div>

        <div>
          <DropdownButton
            id={this.props.dropdownKey}
            title={this.props.category}
            onSelect={(evtKey, evt) => this.handleCategoryChange(evtKey, evt)}>
            {categoryDropdown}
          </DropdownButton>
        </div>

        <Button
          style={{backgroundColor: background}}
          onClick={this.props.onSaveToggle} >
          Save Exercise </Button>
      </div>
    );
  },
});

module.exports = Exercise;
