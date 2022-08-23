import { adminConstants } from '../constants.js';
import {
  getAll,
  post,
  deleteRequest,
  editRequest,
} from '../../../../services/httpService.js';
import {
  loadingFalse,
  loadingTrue,
} from '../../loader/actions/loaderActions.js';

const getAllContent = (data) => ({
  type: adminConstants.GET_ALL_CONTENT,
  payload: data,
});

const getAllRewards = (data) => ({
  type: adminConstants.GET_ALL_REWARDS,
  payload: data,
});

const addContentRow = (formValues) => ({
  type: adminConstants.ADD_CONTENT_ROW,
  payload: formValues,
});

const deleteContentRow = (id) => ({
  type: adminConstants.DELETE_CONTENT_ROW,
  payload: id,
});

const editContentRow = (id, values) => ({
  type: adminConstants.EDIT_CONTENT_ROW,
  payload: { id, values },
});

const deleteRowSuccess = () => ({
  type: adminConstants.DELETE_CONTENT_ROW_SUCCESS,
});

export const getAllContentRequest = (url) => async (dispatch) => {
  dispatch(loadingTrue());

  const response = await getAll(url);

  dispatch(getAllContent(response.data));
  dispatch(loadingFalse());
};

export const getAllRewardsRequest = () => async (dispatch) => {
  const response = await getAll('/rewards');

  dispatch(getAllRewards(response.data));
};

export const addContentRequest = (formValues, url) => async (dispatch) => {
  await post(url, formValues);
  dispatch(addContentRow(formValues));
};

export const deleteContentRequest = (id, url) => async (dispatch) => {
  dispatch(deleteContentRow(id));
  await deleteRequest(`${url}/${id}`);
  dispatch(deleteRowSuccess());
};

export const editContentRequest = (id, url, values) => async (dispatch) => {
  await editRequest(`${url}/${id}`, values);
  dispatch(editContentRow(id, values));
};
