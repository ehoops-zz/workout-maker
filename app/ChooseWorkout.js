// @flow
import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export let ChooseWorkout = React.createClass({

  getInitialState: function () {
    return {
      workoutList: null,
    }
  },

  componentDidMount: function(): void {
    const params = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    }
    fetch('/api/workouts', params)
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

  render: function (): React$Element<*> {
    let workouts = <div>Loading workouts</div>;
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
