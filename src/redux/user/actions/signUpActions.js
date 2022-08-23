import { userConstants } from '../constants.js';
import { post } from '../../../../services/httpService.js';
import { loadingTrue, loadingFalse } from '../../loader/actions/loaderActions';

const signUpFailed = (errorMessage) => ({
  type: userConstants.SIGN_UP_FAILED,
  payload: errorMessage,
});

const signUpSuccess = () => ({
  type: userConstants.SIGN_UP_SUCCESS,
});

export const signUpRequest = (formValues, changeForm) => async (dispatch) => {
  dispatch(loadingTrue());
  const response = await post('/signup', {
    ...formValues,
    balance: 0,
  });

  if (response.data.accessToken) {
    dispatch(loadingFalse());
    dispatch(signUpSuccess());
    changeForm();
  } else {
    dispatch(loadingFalse());
    dispatch(signUpFailed(response));
  }
};
