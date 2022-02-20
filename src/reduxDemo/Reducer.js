import {UPDATE_USER_DATA, Add_LIST} from './Keys';

const initialState = {usersData: [], error: {}};

export const allUsersState = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        usersData: action.payload,
      };
    case Add_LIST:
      return {
        ...state,
        usersData: [state.usersData, action.payload],
      };

    default:
      return state;
  }
};

// reducer/index.js
import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const config = {
  key: 'primary',
  storage: AsyncStorage,
};
export default persistCombineReducers(config, {
  allUsersState,
});
