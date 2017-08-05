import {
  FETCH_CATEGORY_SUCCESS,
  FETCHING_CATEGORY,
  FETCH_CATEGORY_FAIL
} from './constants';

const initState = {
  categories: null,
  fetching: false,
  fetched: false,
  error: null
}


export default function reducer(state = initState, action) {
  switch (action.type) {
    case FETCHING_CATEGORY:
      return {
        ...state,
        fetching: true
      };

    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        fetching: false,
        fetched: true
      }

    case FETCH_CATEGORY_FAIL:
      return {
        ...state,
        error: action.payload,
        fetching: false
      }

    default:
      return state;
  }
};