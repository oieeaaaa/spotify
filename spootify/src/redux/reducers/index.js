import { combineReducers } from 'redux';

import tokenReducer from './tokenReducer';
import discoverReducer from './discoverReducer';

const reducers = combineReducers({
  token: tokenReducer,
  discover: discoverReducer,
});

export default reducers;
