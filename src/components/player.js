import React, { Component, PropTypes } from 'react';

class Player extends Component {
  render() {
    const { height, width, x, y } = this.props;

    const playerStyle = {
      backgroundColor: 'blue',
      height: height,
      width: width,
      transform: `translate(${x}px, ${-1*y}px)`
    };

    return (
      <div style={playerStyle}></div>
    );
  }
}
Player.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number };
Player.defaultProps = { height: 10, width: 10, x: 0, y: 0 };

export default Player;
