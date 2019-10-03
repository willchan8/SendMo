import React, { Component } from 'react';

import LoginForm from './LoginForm';
import TransForm from './TransForm';
import TransList from './TransList';

class App extends Component {
constructor(props) {
  super(props);
}

  render() {
    return (
      <div>
      <LoginForm />
      <hr />
      <TransForm />
      <hr />
      <TransList />
    </div>
    )
  }
}

export default App;