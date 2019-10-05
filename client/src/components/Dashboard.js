import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TitleSmall, Balance, ItemContainer } from './StyledComponents';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';


class Dashboard extends Component {
  render() {
    const { currentUser, currentNode } = this.props;
    return (
      <div className="dashboard">
        <div className="col-left">
          <ItemContainer>
            {/* <TitleSmall>Welcome, {currentUser.json.legal_names[0]}!</TitleSmall> */}
            <TitleSmall>Welcome, User!</TitleSmall>
            <TitleSmall>Available Balance: </TitleSmall>
            <Balance>$5000.00</Balance>
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
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  currentNode: state.currentNode,
});

export default connect(mapStateToProps)(Dashboard);