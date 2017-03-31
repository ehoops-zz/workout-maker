var React = require('react');
var _ = require('underscore');
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;
var exercises = require('./exercises');


var Category = React.createClass({

  handleChange: function (e) {
    this.props.onChange(e.target.value);
  },

  render: function () {
    var allCategories = _.uniq(_.flatten(_.map(exercises, function(exercise) {
      return exercise.categories})));
    var categoryDropdown = _.map(allCategories, function(category) {
      <option value={category}>{category}</option>
    });
    console.log(allCategories);
    return (
      <div>
        <select
          onChange={this.handleChange}>
          {categoryDropdown}
        </select>
      </div>
    );
  },
});

module.exports = Category;
