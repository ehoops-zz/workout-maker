var React = require('react');
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;

var Link = require('react-router-dom').Link;


var ChooseWorkout = React.createClass({

  getInitialState: function () {
    return {
      workoutList: null,
    }
  },

  componentDidMount: function() {
    var params = {method: 'GET',
                  mode: 'cors',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                }
    fetch('http://localhost:3000/api/workouts', params)
      .then(
        function(response) {
          if (response.ok) {
            return response.json();
          } else {
            console.log(`Response status not OK.  Got: ${response.status}`);
          }
        }
      ).then((workoutList) => {
        this.setState({workoutList});
      })
      .catch(function(error) {
        console.log(`There was an error with your request: ${error}`);
      })
  },

  render: function () {
    var workouts = <div>Loading workouts</div>;
    if (this.state.workoutList !== null) {
      workouts = this.state.workoutList.map((workout, index) =>
        <ListGroupItem key={index}>
          <Link to={`/workout/${workout.id}`}>
            {workout.name}
          </Link>
        </ListGroupItem>
      );
    }
    return (
      <ListGroup>
        {workouts}
      </ListGroup>
    );
  },
})

module.exports = ChooseWorkout;
