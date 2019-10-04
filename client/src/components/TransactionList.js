import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Title } from './StyledComponents';
import TransactionItem from './TransactionItem';

class TransactionList extends Component {
  render() {
    return (
      <div className="list-container">
        <Title>Your Transaction History</Title>
          {/* {this.props.transactions.map(transaction => (
            <TransactionItem key={transaction._id} transaction={transaction} />
          ))} */}
          <TransactionItem />
          <TransactionItem />
      </div>
    )
  }
}

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  transactions: state.transactions,
});

export default connect(mapStateToProps)(TransactionList);