import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Title, ProfileContainer } from './StyledComponents';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';


class Dashboard extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        {/* <Title>Welcome {currentUser.json.legal_names[0]}!</Header> */}
        <div className="dashboard">
          <div>
            <ProfileContainer>
              <Title>Welcome User!</Title>
              <Title>Account Balance: $5000</Title>
            </ProfileContainer>
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