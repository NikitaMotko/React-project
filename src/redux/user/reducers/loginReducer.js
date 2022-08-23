import { userConstants } from '../constants.js';

const defaultState = {
  isAuthorized: false,
  errorMessage: '',
};

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return { ...state, isAuthorized: true, errorMessage: '' };
    case userConstants.LOGIN_FAILED:
      return {
        ...state,
        isAuthorized: false,
        errorMessage: action.payload,
      };
    case userConstants.RESET_ERRORS:
      return defaultState;
    default:
      return state;
  }
};
