import {
  TOGGLE_MODAL_VISIBILITY
} from './constants';


export const toggleModal = (visible) => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_MODAL_VISIBILITY,
      payload: visible
    });
  };
};