import { CREATE_USER, CREATE_NODE, CREATE_TRANSACTION } from './actionTypes';
import axios from 'axios';

export const createUser = (userInfo, history) => dispatch => {
  axios.post('/api/users/create', userInfo)
  .then(user => 
    dispatch({
      type: CREATE_USER,
      payload: user.data
    })
  )
  .then(() => history.push('/node'))
  .catch(error => {
    console.log(error)
  });
}

export const createNode = (accountInfo, history) => dispatch => {
  axios.post('/api/users/nodes/create', accountInfo)
  .then(node => 
    dispatch({
      type: CREATE_NODE,
      payload: node.data[0]
    })
  )
  .then(() => history.push('/dashboard'))
  .catch(error => {
    console.log(error)
  });
}

export const createTransaction = (nodeInfo) => dispatch => {
    axios.post('/api/users/nodes/transactions/create', nodeInfo)
    .then(transaction =>
      dispatch({
        type: CREATE_TRANSACTION,
        payload: transaction.data.json
      })
    )
    .catch(error => {
      console.log(error)
    });
}
