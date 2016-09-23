import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  pressUp,
  pressDown,
  pressRight,
  pressLeft,
  releaseUp,
  releaseDown,
  releaseRight,
  releaseLeft
} from '../actions/control-actions';


class Controls extends Component {
  constructor(props) {
    super(props);
    this._keyPress = this._keyPress.bind(this);
    this._keyRelease = this._keyRelease.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this._keyPress);
    window.addEventListener('keyup', this._keyRelease);
  }

  _keyPress(e) {
    const { pressLeft, pressRight, pressUp, pressDown } = this.props;

    switch(e.keyCode) {
      case 37:
        pressLeft();
        break;
      case 39:
        pressRight();
        break;
      case 38:
        pressUp();
        break;
      case 40:
        pressDown();
        break;
    }
  }

  _keyRelease(e) {
    const { releaseLeft, releaseRight, releaseUp, releaseDown } = this.props;

    switch(e.keyCode) {
      case 37:
        releaseLeft();
        break;
      case 39:
        releaseRight();
        break;
      case 38:
        releaseUp();
        break;
      case 40:
        releaseDown();
        break;
    }
  }

  render () {
    return false;
  }
}
Controls.propTypes = {
  xDirection: PropTypes.number.isRequired,
  yDirection: PropTypes.number.isRequired,
  pressLeft: PropTypes.func.isRequired,
  pressRight: PropTypes.func.isRequired,
  pressUp: PropTypes.func.isRequired,
  pressDown: PropTypes.func.isRequired,
  releaseLeft: PropTypes.func.isRequired,
  releaseRight: PropTypes.func.isRequired,
  releaseUp: PropTypes.func.isRequired,
  releaseDown: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    xDirection: state.controls.xDirection,
    yDirection: state.controls.yDirection
  };
}

const mapDispatchToProps = {
  pressUp,
  pressDown,
  pressRight,
  pressLeft,
  releaseUp,
  releaseDown,
  releaseRight,
  releaseLeft
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
