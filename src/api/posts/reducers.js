import {
  FETCH_POST_SUCCESS,
  FETCHING_POST,
  FETCH_POST_FAIL,
  CHANGE_SORT_BY
} from './constants';

const initState = {
  posts: null,
  sort: 'voteScore',
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

    case CHANGE_SORT_BY:
      return {
        ...state,
        sort: action.payload
      }

    default:
      return state;
  }
};