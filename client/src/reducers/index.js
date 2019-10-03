import { combineReducers } from 'redux';
import transReducer from './transReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  transactions: transReducer,
  currentUser: userReducer
})

export default rootReducer;