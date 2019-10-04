import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Title } from './StyledComponents';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';


class Dashboard extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        {/* <Title>Welcome {currentUser.json.legal_names[0]}!</Header> */}
        <Title>Welcome User!</Title>
        <TransactionForm />
        <TransactionList />
      </div>
    )
  }
}

Dashboard.propTypes = {
  currentUser: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Dashboard);