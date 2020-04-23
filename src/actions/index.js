import {
    HIDE_MODAL,
    SHOW_MODAL
} from '../actions/types'
export const showModal = ({ modalProps, modalType }) => (dispatch) => {
    console.log(modalProps)
    dispatch({
      type: SHOW_MODAL,
      modalProps,
      modalType,
    });
  };
  
  export const hideModal = () => (dispatch) => {
    dispatch({
      type:HIDE_MODAL,
    });
  };