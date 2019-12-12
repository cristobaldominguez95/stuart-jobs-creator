import * as actionTypes from './action-types';

export function setPickUpAddressInput(input) {
  return {
    type: actionTypes.SET_PICK_UP_ADDRESS_INPUT,
    payload: {
      input
    }
  }
}

export function setDropOffAddressInput(input) {
  return {
    type: actionTypes.SET_DROP_OFF_ADDRESS_INPUT,
    payload: {
      input
    }
  };
}

export function setToastVisibility(displayToast) {
  return {
    type: actionTypes.SET_TOAST_VISIBILITY,
    payload: {
      displayToast
    }
  };
}

export function setCreatingJob(isCreatingJob) {
  return {
    type: actionTypes.SET_CREATING_JOB,
    payload: {
      isCreatingJob
    }
  };
}

export function setPickUpStatus(status) {
  return {
    type: actionTypes.SET_PICK_UP_STATUS,
    payload: {
      status
    }
  }
}

export function setDropOffStatus(status) {
  return {
    type: actionTypes.SET_DROP_OFF_STATUS,
    payload: {
      status
    }
  }
}

export function resetInputs() {
  return {
    type: actionTypes.RESET_INPUTS
  };
}

export function setPickUpCoordinates(latitude, longitude) {
  return {
    type: actionTypes.SET_PICK_UP_COORDINATES,
    payload: {
      latitude,
      longitude
    }
  };
}

export function setDropOffCoordinates(latitude, longitude) {
  return {
    type: actionTypes.SET_DROP_OFF_COORDINATES,
    payload: {
      latitude,
      longitude
    }
  };
}

export function removePickUpCoordinates() {
  return {
    type: actionTypes.REMOVE_PICK_UP_COORDINATES
  };
}

export function removeDropOffCoordinates() {
  return {
    type: actionTypes.REMOVE_DROP_OFF_COORDINATES
  };
}
