import {
  FETCH_CAT_POST_SUCCESS,
  FETCHING_CAT_POST,
  FETCH_CAT_POST_FAIL,
  CHANGE_CATEGORY
} from './constants';

import {
  API_ENDPOINTS,
  AUTH_TOKEN
} from '../apiEndpoints.config';


export const fetchPosts = (category) => {
  return (dispatch) => {
    dispatch({
      type: FETCHING_CAT_POST
    });

    API_ENDPOINTS.setCategoryPostsURI(category);

    fetch(API_ENDPOINTS.CATEGORY_POSTS, {
      headers: new Headers({
        'Authorization': AUTH_TOKEN
      })
    })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: FETCH_CAT_POST_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_CAT_POST_FAIL,
        payload: err
      });
    });
  };
};

export const changeCategory = (category) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_CATEGORY,
      payload: category
    });
  };
};