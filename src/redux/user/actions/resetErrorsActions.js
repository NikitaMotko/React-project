import { userConstants } from '../constants.js';

const resetLoginErrors = () => ({
  type: userConstants.RESET_ERRORS,
});

const resetSignUpErrors = () => ({
  type: userConstants.RESET_ERRORS,
});

export const resetErrorRequest = () => (dispatch) => {
  dispatch(resetLoginErrors());
  dispatch(resetSignUpErrors());
};
