import { loaderConstants } from '../constants';

export const loadingTrue = () => ({
  type: loaderConstants.LOADING_TRUE,
});

export const loadingFalse = () => ({
  type: loaderConstants.LOADING_FALSE,
});
