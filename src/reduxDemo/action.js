import {USER_DATA_SAVE_KEY} from './Keys';

export const getUserData = dispatch => {
  try {
    dispatch({type: USER_DATA_SAVE_KEY});
  } catch (error) {
    console.log(error);
  }
};
