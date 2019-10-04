import { GET_TRANSACTIONS, CREATE_TRANSACTION } from '../actions/actionTypes';

export default (state = [], action) => {
  switch(action.type) {
    case CREATE_TRANSACTION:
      return [
        action.payload,
        ...state
      ];
    default:
      return state;
  }
}