import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer.js';
import { signUpReducer } from './signUpReducer.js';

export default combineReducers({
  login: loginReducer,
  signUp: signUpReducer,
});
