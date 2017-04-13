const React = require('react');
const ReactDOM = require('react-dom');
const WorkoutView = require('./WorkoutView');

const ExistingWorkoutPage = React.createClass({

  getInitialState: function () {
    return {
      initialExercises: null,
    }
  },

  componentDidMount: function() {
    const id = this.props.match.params.workoutID;
    const params = {method: 'GET',
                  mode: 'cors',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                };
    fetch(`http://localhost:3000/api/workout/${id}`, params)
      .then(
        function(response) {
          if (response.ok) {
            return response.json();
          } else {
            console.log(`Response status not OK.  Got: ${response.status}`);
          }
        }
      ).then((workout) => {
        this.setState({
          initialExercises: workout.exerciseList,
          initialBanner: workout.name
        });
      })
      .catch(function(error) {
        console.log(`There was an error with your request: ${error}`);
      })
  },

  render: function () {
    console.log(this.state);
    if (this.state.initialExercises !== null) {
      return <WorkoutView initialExercises={this.state.initialExercises}
                          initialBanner={this.state.initialBanner} />;
    }
    return <div>Could not load existing workout.</div>;
  },
})

module.exports = ExistingWorkoutPage;
