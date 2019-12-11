import * as actionTypes from './action-types';
import { LOCATION_STATUS } from '../utils';

const initialState = {
  pickUpAddressInput: '',
  pickUpStatus: LOCATION_STATUS.NEUTRAL,
  dropOffAddressInput: '',
  dropOffStatus: LOCATION_STATUS.NEUTRAL,
  isCreatingJob: false,
  displayToast: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PICK_UP_ADDRESS_INPUT:
      return {
        ...state,
        pickUpAddressInput: action.payload.input
      };
    case actionTypes.SET_PICK_UP_STATUS:
      return {
        ...state,
        pickUpStatus: action.payload.status
      };
    case actionTypes.SET_DROP_OFF_ADDRESS_INPUT:
      return {
        ...state,
        dropOffAddressInput: action.payload.input
      };
    case actionTypes.SET_DROP_OFF_STATUS:
      return {
        ...state,
        dropOffStatus: action.payload.status
      };
    case actionTypes.SET_CREATING_JOB:
      return {
        ...state,
        isCreatingJob: action.payload.isCreatingJob
      };
    case actionTypes.SET_TOAST_VISIBILITY:
      return {
        ...state,
        displayToast: action.payload.displayToast
      };
    case actionTypes.RESET_INPUTS:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
