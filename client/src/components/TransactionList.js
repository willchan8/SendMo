import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TitleSmall, ListContainer } from './StyledComponents';
import TransactionItem from './TransactionItem';

class TransactionList extends Component {
  render() {
    return (
      <ListContainer>
        <TitleSmall>Your Transaction History</TitleSmall>
          {/* {this.props.transactions.map(transaction => (
            <TransactionItem key={transaction._id} transaction={transaction} />
          ))} */}
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
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