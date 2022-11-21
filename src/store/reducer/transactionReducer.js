import {UPDATE_ACCOUNT} from '../actions/types';

const initialState = {
  accountBalance: 1000,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case UPDATE_ACCOUNT:
      return {
        ...state,
        accountBalance: payload,
      }
    default:
      return state;
  }
};