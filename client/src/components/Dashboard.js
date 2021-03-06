import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TitleSmall, Balance, ItemContainer, DashContainer } from './StyledComponents';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';


class Dashboard extends Component {
  render() {
    const { currentUser, balance } = this.props;
    return (
      <DashContainer>
        <div className="col-left">
          <ItemContainer>
            <TitleSmall>Welcome, {currentUser.json.legal_names[0]}!</TitleSmall>
            <TitleSmall>Available Balance: </TitleSmall>
            <Balance>${balance.toFixed(2)}</Balance>
          </ItemContainer>
          <TransactionForm />
        </div>
        <TransactionList />
      </DashContainer>
    )
  }
}

Dashboard.propTypes = {
  currentUser: PropTypes.object.isRequired,
  balance: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  balance: state.balance
});

export default connect(mapStateToProps)(Dashboard);