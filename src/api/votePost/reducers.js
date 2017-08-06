import {
  UPDATE_VOTE_SUCCESS,
  UPDATING_VOTE,
  UPDATE_VOTE_FAIL
} from './constants';

const initState = {
  post: null,
  updating: false,
  updated: false,
  error: null
}


export default function reducer(state = initState, action) {
  switch (action.type) {
    case UPDATING_VOTE:
      return {
        ...state,
        updating: true
      };

    case UPDATE_VOTE_SUCCESS:
      return {
        ...state,
        post: action.payload,
        updating: false,
        updated: true
      }

    case UPDATE_VOTE_FAIL:
      return {
        ...state,
        error: action.payload,
        updating: false
      }

    default:
      return state;
  }
};