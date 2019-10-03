import { combineReducers } from 'redux';
import transReducer from './transReducer';
import userReducer from './userReducer';
import nodeReducer from './nodeReducer';

const rootReducer = combineReducers({
  transactions: transReducer,
  currentUser: userReducer,
  currentNode: nodeReducer,
})

export default rootReducer;