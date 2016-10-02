import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Controls from './controls';
import Player from './player';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      position: { x: 0, y: 0 },
      time: { delta: 0, last: performance.now() }
    };
    this._gameLoop = this._gameLoop.bind(this);
  }

  componentDidMount() {
    this._gameLoop();
  }

  _gameLoop() {
    const { xDirection, yDirection } = this.props;
    const { position, time } = this.state;
    const last = time.last;

    const currentTime = performance.now();

    const timestep = 1/60 * 1000;

    var delta = time.delta + (currentTime - last);

    while(delta > timestep) {
      delta -= timestep;

      this.setState({
        position: {
          x: (position.x + xDirection),
          y: (position.y + yDirection)
        },
        time: {
          delta: delta,
          last: currentTime
        }
      });
    }

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
