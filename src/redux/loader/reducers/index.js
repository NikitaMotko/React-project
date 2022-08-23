import { loaderConstants } from '../constants';

const defaultState = {
  isLoading: false,
};

const loader = (state = defaultState, action) => {
  switch (action.type) {
    case loaderConstants.LOADING_TRUE:
      return { isLoading: true };
    case loaderConstants.LOADING_FALSE:
      return { isLoading: false };
    default:
      return state;
  }
};

export default loader;
