import { GET_TRANSACTIONS, CREATE_TRANSACTION, CREATE_USER, CREATE_NODE } from './actionTypes';
import axios from 'axios';

export const createUser = (userInfo) => dispatch => {
  axios.post('/api/users/create', userInfo)
  .then(user => 
    dispatch({
      type: CREATE_USER,
      payload: user.data
    })
  );
}

export const createNode = (accountInfo) => dispatch => {
  axios.post('/api/users/nodes/create', accountInfo)
  .then(node => 
    dispatch({
      type: CREATE_NODE,
      payload: node.data[0]
    })
  );
}

export const getTransactions = () => dispatch => {
  fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(transactions =>
      dispatch({
        type: GET_TRANSACTIONS,
        payload: transactions.json
      })
    );
}

export const createTransaction = (nodeInfo) => dispatch => {
    axios.post('/api/users/nodes/transactions/create', nodeInfo)
    .then(transaction =>
      dispatch({
        type: CREATE_TRANSACTION,
        payload: transaction
      })
    );
}
