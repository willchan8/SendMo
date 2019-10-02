import { FETCH_POSTS, NEW_POST } from '../actions/actionTypes';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return action.payload;
    case NEW_POST:
      return [
        action.payload,
        ...state
      ];
    default:
      return state;
  }
}