import {
  TOGGLE_MODAL_VISIBILITY
} from './constants';

const initState = {
  visible: false,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case TOGGLE_MODAL_VISIBILITY:
      return {
        ...state,
        visible: action.payload
      };

    default:
      return state;
  }
};