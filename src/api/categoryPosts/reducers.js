import {
  FETCH_CAT_POST_SUCCESS,
  FETCHING_CAT_POST,
  FETCH_CAT_POST_FAIL,
  CHANGE_CATEGORY
} from './constants';

const initState = {
  posts: null,
  category: null,
  sort: 'voteScore',
  fetching: false,
  fetched: false,
  error: null
}


export default function reducer(state = initState, action) {
  switch (action.type) {
    case FETCHING_CAT_POST:
      return {
        ...state,
        fetching: true
      };

    case FETCH_CAT_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        fetching: false,
        fetched: true
      }

    case FETCH_CAT_POST_FAIL:
      return {
        ...state,
        error: action.payload,
        fetching: false
      }

    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.payload
      }

    default:
      return state;
  }
};