import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from './StyledComponents'; 

class TransactionList extends Component {
  render() {
    return (
      <div>
        <Header>Your Recent Transactions</Header>
        {this.props.transactions.map(transaction => (
          <div key={transaction._id}>
            <div>{console.log(transaction)}</div>
            <h3>Transaction ID: {transaction._id}</h3>
            <h3>Date: 
              {`
                ${(new Date(transaction.extra.created_on)).getMonth() + 1}/
                ${(new Date(transaction.extra.created_on)).getDate()}/
                ${(new Date(transaction.extra.created_on)).getFullYear()}
              `}
            </h3>
            <h3>To: {transaction.to.user.legal_names[0]}</h3>
            <h3>Description: {transaction.extra.note}</h3>
            <h3>Amount: ${transaction.amount.amount}</h3>
          </div>
        ))}
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