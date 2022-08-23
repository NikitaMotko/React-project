import { userConstants } from '../constants';

const defaultState = {
  errorMessage: '',
};

export const signUpReducer = (state = defaultState, action) => {
  switch (action.type) {
    case userConstants.SIGN_UP_SUCCESS:
      return { ...state, errorMessage: '' };
    case userConstants.SIGN_UP_FAILED:
      return { ...state, errorMessage: action.payload };
    case userConstants.RESET_ERRORS:
      return defaultState;
    default:
      return state;
  }
};
