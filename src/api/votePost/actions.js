import {
  UPDATE_VOTE_SUCCESS,
  UPDATING_VOTE,
  UPDATE_VOTE_FAIL
} from './constants';

import {
  API_ENDPOINTS,
  headers
} from '../apiEndpoints.config';


export const votePost = (id, vote) => {
  return (dispatch) => {
    dispatch({
      type: UPDATING_VOTE
    });

    API_ENDPOINTS.setPostURI(id);

    const data = {
      option: vote
    };

    fetch(API_ENDPOINTS.POST, {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: UPDATE_VOTE_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_VOTE_FAIL,
        payload: err
      });
    });
  };
};