// @flow
import React from 'react';
import _ from 'underscore';
import classNames from 'classnames';
import {DropdownButton, MenuItem, Button, Glyphicon, Grid, Row, Col} from 'react-bootstrap';
import './Exercise.css';

const Exercise = React.createClass({

  handleCategoryChange: function (evtKey, evt) {
    this.props.onCategoryChange(evtKey);
  },

  handleMouseEnter: function(evtKey, evt) {
    let popUp = document.getElementById(`description-${this.props.exercise.id}`);
    popUp.classList.add('show');
  },

  handleMouseLeave: function (evtKey, evt) {
    let popUp = document.getElementById(`description-${this.props.exercise.id}`);
    popUp.classList.remove('show');
  },

  render: function (): React$Element<*> {
    const exercise = this.props.exercise;
    const index = this.props.workoutIndex;
    const background = this.props.saved ? 'lightblue' : 'gray';

    const allExercises = this.props.allExercises;
    const allCategories = _.uniq(_.flatten(_.map(allExercises, function(exercise) {
      return exercise.categories})));
    const categoryDropdown = _.map(allCategories, function(category) {
      return <MenuItem
        eventKey={category}
        key={category}
        value={category}> {category} </MenuItem>
    });

    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={2} md={4}>
            <DropdownButton
              id={this.props.dropdownKey}
              title={this.props.category}
              onSelect={(evtKey, evt) => this.handleCategoryChange(evtKey, evt)}>
              {categoryDropdown}
            </DropdownButton>
          </Col>

          <Col xs={6} md={4}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onClick={this.handleMouseLeave}
            key={index}>
            <div>Exercise: {exercise.name}</div>
            <div>Categories: {exercise.categories.join(', ')}</div>
            <div>Time: {exercise.time}</div>
          </Col>

          <div id={`description-${exercise.id}`}className="pop-up">{exercise.description}</div>

          <Col xs={2} md={2}>
            <Button
              style={{backgroundColor: background}}
              onClick={this.props.onSaveToggle} >
              <Glyphicon glyph="ok" />
            </Button>
          </Col>

          <Col xs={2} md={2}>
            <Button id={"delete-" + index}
            onClick={() => {this.props.onDeleteExercise(index)}}>X</Button>
          </Col>
        </Row>
      </Grid>
    );
  },
});

module.exports = Exercise;
