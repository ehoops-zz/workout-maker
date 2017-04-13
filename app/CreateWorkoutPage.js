const React = require('react');
const WorkoutView = require('./WorkoutView');

let CreateWorkoutPage = React.createClass({
  render: function () {
    return <WorkoutView />;
  },
})

module.exports = CreateWorkoutPage;
