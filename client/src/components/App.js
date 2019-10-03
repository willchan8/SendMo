import React, { Component } from 'react';

import CreateAccount from './CreateAccount';
import TransForm from './TransForm';
import TransactionList from './TransactionList';

class App extends Component {
constructor(props) {
  super(props);
}

  render() {
    return (
      <div>
      <CreateAccount />
      <hr />
      <TransForm />
      <hr />
      <TransactionList />
    </div>
    )
  }
}

export default App;