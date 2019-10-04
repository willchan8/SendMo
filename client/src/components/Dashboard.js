import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextSmall, TextBig, ItemContainer } from './StyledComponents';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';


class Dashboard extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <div className="dashboard">
          <div className="col-left">
            <ItemContainer>
          {/* <Title>Welcome {currentUser.json.legal_names[0]}!</Header> */}
              <TextSmall>Welcome, User!</TextSmall>
              <TextSmall>Account Balance: </TextSmall>
              <TextBig>$10000</TextBig>
            </ItemContainer>
            <TransactionForm />
          </div>
          <TransactionList />
        </div>
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