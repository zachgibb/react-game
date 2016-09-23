export const UP_PRESSED = 'UP_PRESSED';
export const UP_RELEASED = 'UP_RELEASED';
export const DOWN_PRESSED = 'DOWN_PRESSED';
export const DOWN_RELEASED = 'DOWN_RELEASED';
export const RIGHT_PRESSED = 'RIGHT_PRESSED';
export const RIGHT_RELEASED = 'RIGHT_RELEASED';
export const LEFT_PRESSED = 'LEFT_PRESSED';
export const LEFT_RELEASED = 'LEFT_RELEASED';

export function pressUp() {
  return {
    type: UP_PRESSED
  };
};

export function releaseUp() {
  return {
    type: UP_RELEASED
  };
};

export function pressDown() {
  return {
    type: DOWN_PRESSED
  };
};

export function releaseDown() {
  return {
    type: DOWN_RELEASED
  };
};

export function pressRight() {
  return {
    type: RIGHT_PRESSED
  };
};

export function releaseRight() {
  return {
    type: RIGHT_RELEASED
  };
};

export function pressLeft() {
  return {
    type: LEFT_PRESSED
  };
};

export function releaseLeft() {
  return {
    type: LEFT_RELEASED
  };
};
