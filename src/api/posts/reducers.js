import {
  FETCH_POST_SUCCESS,
  FETCHING_POST,
  FETCH_POST_FAIL
} from './constants';

const initState = {
  posts: null,
  fetching: false,
  fetched: false,
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
        posts: action.payload,
        fetching: false,
        fetched: true
      }

    case FETCH_POST_FAIL:
      return {
        ...state,
        error: action.payload,
        fetching: false
      }

    default:
      return state;
  }
};