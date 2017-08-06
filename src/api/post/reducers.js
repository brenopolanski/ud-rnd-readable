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

const initState = {
  post: null,
  fetching: false,
  fetched: false,
  updating: false,
  updated: false,
  deleting: false,
  deleted: false,
  posting: false,
  posted: false,
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

    case DELETING_POST:
      return {
        ...state,
        deleting: true
      };

    case DELETE_POST_SUCCESS:
      return {
        ...state,
        post: null,
        deleting: false,
        deleted: true
      }

    case DELETE_POST_FAIL:
      return {
        ...state,
        error: action.payload,
        deleting: false
      }

    case POSTING_POST:
      return {
        ...state,
        posting: true
      };

    case POST_POST_SUCCESS:
      return {
        ...state,
        posting: false,
        posted: true
      }

    case POST_POST_FAIL:
      return {
        ...state,
        error: action.payload,
        posting: false
      }

    default:
      return state;
  }
};