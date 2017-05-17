// @flow
const React = require('react');
const _ = require('underscore');

const DropdownButton = require('react-bootstrap').DropdownButton;
const MenuItem = require('react-bootstrap').MenuItem;
const Button = require('react-bootstrap').Button;
const Glyphicon = require('react-bootstrap').Glyphicon;
const Grid = require('react-bootstrap').Grid;
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;

const Exercise = React.createClass({

  handleCategoryChange: function (evtKey, evt) {
    this.props.onCategoryChange(evtKey);
  },

  render: function (): React$Element<*> {
    const exercise = this.props.exercise;
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

          <Col xs={6} md={4}>
            <div>Exercise: {exercise.name}</div>
            <div>Categories: {exercise.categories.join(', ')}</div>
            <div>Time: {exercise.time}</div>
          </Col>

          <Col xs={4} md={4}>
            <Button
              style={{backgroundColor: background}}
              onClick={this.props.onSaveToggle} >
              <Glyphicon glyph="ok" />
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  },
});

module.exports = Exercise;
