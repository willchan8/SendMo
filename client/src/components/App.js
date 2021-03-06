import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateUser from './CreateUser';
import CreateNode from './CreateNode';
import Dashboard from './Dashboard';
import Header from './Header';

const App = ({ store }) => (
  <Provider store={store}>
    <Header />
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

export default App;