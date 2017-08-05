import {
  FETCH_CATEGORY_SUCCESS,
  FETCHING_CATEGORY,
  FETCH_CATEGORY_FAIL
} from './constants';

import {
  API_ENDPOINTS,
  AUTH_TOKEN
} from '../apiEndpoints.config';


export const fetchCategories = () => {
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
      if (res.categories) {
        dispatch({
          type: FETCH_CATEGORY_SUCCESS,
          payload: res.categories
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