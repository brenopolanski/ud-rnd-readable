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

const initState = {
  comments: null,
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
    case FETCHING_COMMENT:
      return {
        ...state,
        fetching: true
      };

    case FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        fetching: false,
        fetched: true
      }

    case FETCH_COMMENT_FAIL:
      return {
        ...state,
        error: action.payload,
        fetching: false
      }

    case UPDATING_COMMENT:
      return {
        ...state,
        fetching: true
      };

    case UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        updating: false,
        updated: true
      }

    case UPDATE_COMMENT_FAIL:
      return {
        ...state,
        error: action.payload,
        updating: false
      }

    case DELETING_COMMENT:
      return {
        ...state,
        deleting: true
      };

    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: null,
        deleting: false,
        deleted: true
      }

    case DELETE_COMMENT_FAIL:
      return {
        ...state,
        error: action.payload,
        deleting: false
      }

    case COMMENTING_COMMENT:
      return {
        ...state,
        posting: true
      };

    case COMMENT_COMMENT_SUCCESS:
      return {
        ...state,
        posting: false,
        posted: true
      }

    case COMMENT_COMMENT_FAIL:
      return {
        ...state,
        error: action.payload,
        posting: false
      }

    default:
      return state;
  }
};