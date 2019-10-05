import { DEDUCT_BALANCE } from '../actions/actionTypes';

export default (state = 5000, action) => {
  switch(action.type) {
    case DEDUCT_BALANCE:
      return state - action.payload;
    default:
      return state;
  }
}