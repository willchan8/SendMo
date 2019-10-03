import React, { Component } from 'react';

import CreateUser from './CreateUser';
import CreateNode from './CreateNode';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

class App extends Component {
constructor(props) {
  super(props);
}

  render() {
    return (
      <div>
      <CreateUser />
      <hr />
      <CreateNode />
      <hr />
      <TransactionForm />
      <hr />
      <TransactionList />
    </div>
    )
  }
}

export default App;