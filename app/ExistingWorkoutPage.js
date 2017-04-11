var React = require('react');
var ReactDOM = require('react-dom');
var WorkoutView = require('./WorkoutView');

var ExistingWorkoutPage = React.createClass({

  getInitialState: function () {
    return {
      initialExercises: null,
    }
  },

  componentDidMount: function() {
    var id = this.props.match.params.workoutID;
    var params = {method: 'GET',
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
        this.setState({initialExercises: workout.exerciseList});
      })
      .catch(function(error) {
        console.log(`There was an error with your request: ${error}`);
      })
  },

  render: function () {
    console.log(this.state);
    if (this.state.initialExercises !== null) {
      return <WorkoutView initialExercises={this.state.initialExercises} />;
    }
    return <div>test</div>;
  },
})

module.exports = ExistingWorkoutPage;
