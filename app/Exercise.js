var React = require('react');
var Category = require('./Category');

var Exercise = React.createClass({

  render: function () {
    var exercise = this.props.exercise;
    var background = this.props.saved ? 'blue' : 'gray';
    return (
      <div>
        <div>Exercise: {exercise.name}</div>
        <div>Categories: {exercise.categories.join(', ')}</div>

        <Category
          onChange={this.props.onChange} />

        <button
          style={{backgroundColor: background}}
          onClick={this.props.onClick}>
          Save Exercise </button>
      </div>
    );
  },
});

module.exports = Exercise;
