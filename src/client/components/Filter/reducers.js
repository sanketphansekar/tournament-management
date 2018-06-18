import * as types from './actionTypes';

const initialState = {
  filter: 'TODAY'
};

export default function (state = initialState.filter, action) {
  switch (action.type) {
    case types.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}
