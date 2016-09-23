import {
  UP_PRESSED,
  UP_RELEASED,
  DOWN_PRESSED,
  DOWN_RELEASED,
  RIGHT_PRESSED,
  RIGHT_RELEASED,
  LEFT_PRESSED,
  LEFT_RELEASED
} from '../actions/control-actions';

const defaultState = {
  upDown: false,
  downDown: false,
  rightDown: false,
  leftDown: false,
  xDirection: 0,
  yDirection: 0
};

function xDirection(rightDown, leftDown) {
  if (rightDown && leftDown) {
    return 0;
  } else if (rightDown) {
    return 1;
  } else if (leftDown) {
    return -1;
  } else {
    return 0;
  }
};

function yDirection(upDown, downDown) {
  if (upDown && downDown) {
    return 0;
  } else if (upDown) {
    return 1;
  } else if (downDown) {
    return -1;
  } else {
    return 0;
  }
};

export default function controls(state = defaultState, action) {
  switch (action.type) {
    case UP_PRESSED :
      //TO DO calculate directions
      return {
        ...state,
        upDown: true,
        yDirection: yDirection(true, state.downDown)
      };
    case UP_RELEASED:
      return {
        ...state,
        upDown: false,
        yDirection: yDirection(false, state.downDown)
      };
    case DOWN_PRESSED :
      return {
        ...state,
        downDown: true,
        yDirection: yDirection(state.upState, true)
      };
    case DOWN_RELEASED:
      return {
        ...state,
        downDown: false,
        yDirection: yDirection(state.upState, false)
      };
    case RIGHT_PRESSED :
      return {
        ...state,
        rightDown: true,
        xDirection: xDirection(true, state.leftDown)
      };
    case RIGHT_RELEASED:
      return {
        ...state,
        rightDown: false,
        xDirection: xDirection(false, state.leftDown)
      };
    case LEFT_PRESSED :
      return {
        ...state,
        leftDown: true,
        xDirection: xDirection(state.rightDown, true)
      };
    case LEFT_RELEASED:
      return {
        ...state,
        leftDown: false,
        xDirection: xDirection(state.rightDown, false)
      };
    default:
      return state;
  }
}
