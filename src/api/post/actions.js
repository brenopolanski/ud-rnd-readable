import {
  FETCH_POST_SUCCESS,
  FETCHING_POST,
  FETCH_POST_FAIL,

  UPDATE_POST_SUCCESS,
  UPDATING_POST,
  UPDATE_POST_FAIL,

  DELETE_POST_SUCCESS,
  DELETING_POST,
  DELETE_POST_FAIL,

  POST_POST_SUCCESS,
  POSTING_POST,
  POST_POST_FAIL
} from './constants';

import {
  API_ENDPOINTS,
  headers
} from '../apiEndpoints.config';


export const deletePost = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETING_POST
    });

    API_ENDPOINTS.setPostURI(id);

    fetch(API_ENDPOINTS.POST, {
      method: 'DELETE',
      headers
    })
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: DELETE_POST_SUCCESS,
          payload: res
        });
      }
    })
    .catch(err => {
      dispatch({
        type: DELETE_POST_FAIL,
        payload: err
      });
    });
  };
};


export const fetchPost = (id) => {
  return (dispatch) => {
    dispatch({
      type: FETCHING_POST
    });

    API_ENDPOINTS.setPostURI(id);

    fetch(API_ENDPOINTS.POST, {
      headers
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


export const editPost = (post) => {
  return (dispatch) => {
    dispatch({
      type: UPDATING_POST
    });

    API_ENDPOINTS.setPostURI(post.id);

    const data = {
      title: post.title,
      body: post.body
    };

    fetch(API_ENDPOINTS.POST, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers
    })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: UPDATE_POST_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_POST_FAIL,
        payload: err
      });
    });
  };
};

export const newPost = (post) => {
  return (dispatch) => {
    dispatch({
      type: POSTING_POST
    });

    fetch(API_ENDPOINTS.POSTS, {
      method: 'POST',
      body: JSON.stringify(post),
      headers
    })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: POST_POST_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: POST_POST_FAIL,
        payload: err
      });
    });
  };
}