import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Title, ListContainer } from './StyledComponents';
import TransactionItem from './TransactionItem';

class TransactionList extends Component {
  render() {
    return (
      <ListContainer>
        <Title>Your Transaction History</Title>
        {/* {this.props.transactions.map(transaction => (
          <TransactionItem key={transaction._id} transaction={transaction} />
        ))} */}
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />

      </ListContainer>
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