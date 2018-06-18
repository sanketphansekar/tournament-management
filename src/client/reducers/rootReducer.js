import { combineReducers } from 'redux';

import filter from '../components/Filter/reducers';
import homeReducer from '../components/Home/reducer';

const rootReducer = combineReducers({
  matches: homeReducer,
  filter
});

export default rootReducer;
