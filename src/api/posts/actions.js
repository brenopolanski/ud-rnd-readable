import {
  FETCH_POST_SUCCESS,
  FETCHING_POST,
  FETCH_POST_FAIL
} from './constants';

import {
  API_ENDPOINTS,
  AUTH_TOKEN
} from '../apiEndpoints.config';


export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({
      type: FETCHING_CATEGORY
    });

    fetch(API_ENDPOINTS.CATEGORIES, {
      headers: new Headers({
        'Authorization': AUTH_TOKEN
      })
    })
    .then(res => res.json())
    .then(res => {
      if (res.posts) {
        dispatch({
          type: FETCH_CATEGORY_SUCCESS,
          payload: res.posts
        });
      } else {
        dispatch({
          type: FETCH_CATEGORY_FAIL,
          payload: 'Unknown error'
        });
      }
    })
    .catch(err => {
      dispatch({
        type: FETCH_CATEGORY_FAIL,
        payload: err
      });
    })
  }
};