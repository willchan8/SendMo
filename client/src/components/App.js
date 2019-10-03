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
      <div style={{position: 'relative'}}>
      <CreateUser />
      <CreateNode />
      <TransactionForm />
      <TransactionList />
    </div>
    )
  }
}

export default App;