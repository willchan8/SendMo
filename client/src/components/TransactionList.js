import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTransactions } from '../actions';

class TransactionList extends Component {
  componentDidMount() {
    // this.props.getTransactions();
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {/* {this.props.transactions.map(transaction => (
          // <div key={trans.id}>
          //   <h3>{trans.title}</h3>
          //   <p>{trans.body}</p>
          // </div>
          <div>
            <h3>{transaction.title}</h3>
            <p>{transaction.body}</p>
          </div>
        ))} */}
      </div>
    )
  }
}

TransactionList.propTypes = {
  getTransactions: PropTypes.func.isRequired,
  transactions: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  transactions: state.transactions,
});

export default connect(mapStateToProps, { getTransactions })(TransactionList);