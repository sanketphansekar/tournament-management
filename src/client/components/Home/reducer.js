import * as types from './actionTypes';

const initialState = {
  matches: []
};

export default function (state = initialState.matches, action) {
  switch (action.type) {
    case types.LOAD_MATCH_SUCCESS:
      return action.matches;
    default:
      return state;
  }
}
