import axios from 'axios';
import { BASE_URL } from '../src/constants';
// {
//   "id": 0,
//   "email": "roman.hryb@nure.ua",
//   "userName": "Stella",
//   "password": "123456",
//   "balance": 9999999
// },

const parseErrorResponse = (response) => {
  switch (response.status) {
    case 400:
      return response.data;
    case 404:
      return 'Not Found!';
    case 500:
      return 'Internal Server Error!';
    default:
      alert('Something wrong!');
      return 'Something wrong!';
  }
};

const request = async ({ method, url, params, data }) => {
  try {
    const response = await axios({
      method,
      url: `${BASE_URL}${url}`,
      data,
      params,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.log(error);
    return parseErrorResponse(error.response);
  }
};
export const getOne = (url, params) => {
  return request({
    method: 'get',
    url,
    params,
  });
};

export const getAll = (url, params) => {
  return request({
    method: 'get',
    url,
    params,
  });
};

export const post = (url, data) => {
  return request({
    method: 'post',
    url,
    data,
  });
};

export const deleteRequest = (url, data) => {
  return request({
    method: 'delete',
    url,
    data,
  });
};

export const editRequest = (url, data) => {
  return request({
    method: 'put',
    url,
    data,
  });
};
