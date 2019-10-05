import { combineReducers } from 'redux';
import transReducer from './transReducer';
import userReducer from './userReducer';
import nodeReducer from './nodeReducer';
import loadingReducer from './loadingReducer';
import balanceReducer from './balanceReducer';

const rootReducer = combineReducers({
  transactions: transReducer,
  currentUser: userReducer,
  currentNode: nodeReducer,
  loading: loadingReducer,
  balance: balanceReducer,
})

export default rootReducer;