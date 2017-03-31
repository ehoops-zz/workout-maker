var React = require('react');
var ReactDOM = require('react-dom');
var exercises = require('./exercises');
var App = require('./App');
var Exercise = require('./Exercise');


/*
var Workout = React.createClass({
  render: function () {
    var {workoutList} = this.props;
    var listItems = workoutList.map((item, index) =>
      <li key={index}>{item.name}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  },
});
*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
