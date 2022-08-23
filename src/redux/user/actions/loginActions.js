import { userConstants } from '../constants.js';
import { post } from '../../../../services/httpService.js';
import { loadingTrue, loadingFalse } from '../../loader/actions/loaderActions';

const loginFailed = (errorMessage) => ({
  type: userConstants.LOGIN_FAILED,
  payload: errorMessage,
});

const loginSuccess = () => ({
  type: userConstants.LOGIN_SUCCESS,
});

export const loginRequest = (formValues, navigate) => async (dispatch) => {
  dispatch(loadingTrue());
  const response = await post('/login', formValues);

  if (response.data?.accessToken) {
    dispatch(loadingFalse());
    dispatch(loginSuccess());
    localStorage.setItem('token', response.data.accessToken);
    localStorage.setItem('userId', response.data.user.id);
    navigate('/');
  } else {
    dispatch(loadingFalse());
    dispatch(loginFailed(response));
  }
};
