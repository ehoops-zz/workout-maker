var React = require('react');

var Reroll = React.createClass({
  handleClick: function (e) {
    this.props.onClick();
  },

  render: function () {
    return (
      <div>
        <br />
        <button onClick={this.handleClick}>
          Reroll Workout
        </button>
        <br />
      </div>
    );
  },
});

module.exports = Reroll;
