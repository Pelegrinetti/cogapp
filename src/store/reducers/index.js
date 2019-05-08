import { combineReducers } from 'redux';

import user from './user';
import speaking from './speaking';

export default combineReducers({
  user,
  speaking,
});
