import {
  FETCH_POST_SUCCESS,
  FETCHING_POST,
  FETCH_POST_FAIL,
  CHANGE_SORT_BY
} from './constants';

import {
  API_ENDPOINTS,
  AUTH_TOKEN
} from '../apiEndpoints.config';


export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({
      type: FETCHING_POST
    });

    fetch(API_ENDPOINTS.POSTS, {
      headers: new Headers({
        'Authorization': AUTH_TOKEN
      })
    })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: FETCH_POST_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_POST_FAIL,
        payload: err
      });
    });
  };
};


export const changeSortOption = (property) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_SORT_BY,
      payload: property || 'voteScore'
    });
  };
};