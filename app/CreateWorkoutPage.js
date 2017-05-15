// @flow
const React = require('react');
import WorkoutView from'./WorkoutView';

const CreateWorkoutPage = React.createClass({
  render: function (): React$Element<*> {
    return <WorkoutView />;
  },
})

module.exports = CreateWorkoutPage;
