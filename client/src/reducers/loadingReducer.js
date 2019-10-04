import { IS_LOADING, DONE_LOADING } from '../actions/actionTypes';

export default (state = false, action) => {
  switch(action.type) {
    case IS_LOADING:
      return action.payload;
    case DONE_LOADING:
        return action.payload;
    default:
      return state;
  }
}