import {
  FETCH_COMMENT_SUCCESS,
  FETCHING_COMMENT,
  FETCH_COMMENT_FAIL,

  UPDATE_COMMENT_SUCCESS,
  UPDATING_COMMENT,
  UPDATE_COMMENT_FAIL,

  DELETE_COMMENT_SUCCESS,
  DELETING_COMMENT,
  DELETE_COMMENT_FAIL,

  COMMENT_COMMENT_SUCCESS,
  COMMENTING_COMMENT,
  COMMENT_COMMENT_FAIL
} from './constants';

import {
  API_ENDPOINTS,
  headers
} from '../apiEndpoints.config';


export const fetchComments = (id) => {
  return (dispatch) => {
    dispatch({
      type: FETCHING_COMMENT
    });

    API_ENDPOINTS.setCommentsURI(id);
    console.log(API_ENDPOINTS.COMMENTS)
    fetch(API_ENDPOINTS.COMMENTS, {
      headers
    })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: FETCH_COMMENT_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_COMMENT_FAIL,
        payload: err
      });
    });
  };
};