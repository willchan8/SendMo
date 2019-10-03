import { CREATE_NODE } from '../actions/actionTypes';

export default (state = [], action) => {
  switch(action.type) {
    case CREATE_NODE:
      return action.payload;
    default:
      return state;
  }
}