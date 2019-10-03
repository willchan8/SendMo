import { GET_TRANSACTIONS, CREATE_TRANSACTION, CREATE_USER } from './actionTypes';
import axios from 'axios';

export const getTransactions = () => dispatch => {
  fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(transactions =>
      dispatch({
        type: GET_TRANSACTIONS,
        payload: transactions
      })
    );
}

export const createTransaction = (transaction) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(transaction)
    })
    .then(res => res.json())
    .then(transaction =>
      dispatch({
        type: CREATE_TRANSACTION,
        payload: transaction
      })
    );
}


export const createUser= (userInfo) => dispatch => {
  axios.post('/api/users/create', userInfo)
  .then(user => 
    dispatch({
      type: CREATE_USER,
      payload: user.data.json
    })
  );
}