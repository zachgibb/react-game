import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Controls from './controls';
import Player from './player';

class Game extends Component {
  constructor() {
    super();
    this.state = { position: { x: 0, y: 0 } };
    this._gameLoop = this._gameLoop.bind(this);
  }

  componentDidMount() {
    this._gameLoop();
  }

  _gameLoop() {
    const { xDirection, yDirection } = this.props;
    const { position } = this.state;

    this.setState({
      position: {
        x: (position.x + xDirection),
        y: (position.y + yDirection)
      }
    });

    window.requestAnimationFrame(this._gameLoop);
  }

  render () {
    let { position } = this.state;

    return(
      <div>
        <Controls/>
        <Player x={position.x} y={position.y}/>
      </div>
    );
  }
}
Game.propTypes = {
  xDirection: PropTypes.number.isRequired,
  yDirection: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    xDirection: state.controls.xDirection,
    yDirection: state.controls.yDirection
  };
}

export default connect(mapStateToProps)(Game);
