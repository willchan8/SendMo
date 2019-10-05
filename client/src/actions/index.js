import { CREATE_USER, CREATE_NODE, CREATE_TRANSACTION, IS_LOADING, DONE_LOADING } from './actionTypes';
import axios from 'axios';

export const createUser = (userInfo, history) => dispatch => {
  dispatch({ type: IS_LOADING, payload: true });

  axios.post('/api/users/create', userInfo)
  .then(user => 
    dispatch({
      type: CREATE_USER,
      payload: user.data
    })
  )
  .then(() =>     
    dispatch({
      type: DONE_LOADING,
      payload: false
    })
  )
  .then(() => history.push('/node'))
  .catch(error => {
    alert(`${error}. Unable to Create User.`);
  });
}

export const createNode = (accountInfo, history) => dispatch => {
  dispatch({ type: IS_LOADING, payload: true });

  axios.post('/api/users/nodes/create', accountInfo)
  .then(node => 
    dispatch({
      type: CREATE_NODE,
      payload: node.data[0]
    })
  )
  .then(() =>     
    dispatch({
      type: DONE_LOADING,
      payload: false
    })
  )
  .then(() => history.push('/dashboard'))
  .catch(error => {
    alert(`${error}. Unable to Create Node.`);
  });
}

export const createTransaction = (nodeInfo) => dispatch => {
  dispatch({ type: IS_LOADING, payload: true });

  axios.post('/api/users/nodes/transactions/create', nodeInfo)
  .then(transaction =>
    dispatch({
      type: CREATE_TRANSACTION,
      payload: transaction.data.json
    })
  )
  .then(() =>     
    dispatch({
      type: DONE_LOADING,
      payload: false
    })
  )
  .catch(error => {
    alert(`${error}. Unable to Create Transaction.`);
  });
}