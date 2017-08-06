import {
  FETCH_POST_SUCCESS,
  FETCHING_POST,
  FETCH_POST_FAIL,

  UPDATE_POST_SUCCESS,
  UPDATING_POST,
  UPDATE_POST_FAIL
} from './constants';

const initState = {
  post: null,
  fetching: false,
  fetched: false,
  updating: false,
  updated: false,
  error: null
}


export default function reducer(state = initState, action) {
  switch (action.type) {
    case FETCHING_POST:
      return {
        ...state,
        fetching: true
      };

    case FETCH_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        fetching: false,
        fetched: true
      }

    case FETCH_POST_FAIL:
      return {
        ...state,
        error: action.payload,
        fetching: false
      }

    case UPDATING_POST:
      return {
        ...state,
        fetching: true
      };

    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        updating: false,
        updated: true
      }

    case UPDATE_POST_FAIL:
      return {
        ...state,
        error: action.payload,
        updating: false
      }

    default:
      return state;
  }
};