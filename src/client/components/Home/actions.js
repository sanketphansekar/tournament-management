import { getAllMatches } from '../../util/api';
import { LOAD_MATCH_SUCCESS } from './actionTypes';

export function loadMatchesSuccess(matches) {
  return {
    type: LOAD_MATCH_SUCCESS,
    matches
  };
}

export function loadMatches() {
  return (dispatch) => {
    getAllMatches().then(matches => dispatch(loadMatchesSuccess(matches)));
  };
}
