import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TitleSmall, Balance, ItemContainer } from './StyledComponents';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';


class Dashboard extends Component {
  render() {
    const { currentUser, currentNode, balance } = this.props;
    return (
      <div className="dashboard">
        <div className="col-left">
          <ItemContainer>
            <TitleSmall>Welcome, {currentUser.json.legal_names[0]}!</TitleSmall>
            <TitleSmall>Available Balance: </TitleSmall>
            <Balance>${balance.toFixed(2)}</Balance>
          </ItemContainer>
          <TransactionForm />
        </div>
        <TransactionList />
      </div>
    )
  }
}

Dashboard.propTypes = {
  currentUser: PropTypes.object.isRequired,
  currentNode: PropTypes.object.isRequired,
  balance: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  currentNode: state.currentNode,
  balance: state.balance
});

export default connect(mapStateToProps)(Dashboard);