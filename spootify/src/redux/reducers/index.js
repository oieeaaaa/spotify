import { combineReducers } from 'redux';

import tokenReducer from './tokenReducer';

const reducers = combineReducers({
  token: tokenReducer,
});

export default reducers;
