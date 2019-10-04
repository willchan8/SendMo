// import React, { Component } from 'react';

// import CreateUser from './CreateUser';
// import CreateNode from './CreateNode';
// import DashBoard from './Dashboard';

// class App extends Component {
// constructor(props) {
//   super(props);
// }

//   render() {
//     return (
//       <div>
//         <CreateUser />
//         <CreateNode />
//         <DashBoard />
//       </div>
//     )
//   }
// }

// export default App;

import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateUser from './CreateUser';
import CreateNode from './CreateNode';
import Dashboard from './Dashboard';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={CreateUser} />
        <Route path="/node" component={CreateNode} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App