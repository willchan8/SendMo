import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Title, FormContainer } from './StyledComponents'; 

class TransactionList extends Component {
  render() {
    return (
      <FormContainer>
        <Title>Your Transaction History</Title>
        {this.props.transactions.map(transaction => (
          <div key={transaction._id}>
            <div>{console.log(transaction)}</div>
            <div>Transaction ID: {transaction._id}</div>
            <div>Date: 
              {`
                ${(new Date(transaction.extra.created_on)).getMonth() + 1}/${(new Date(transaction.extra.created_on)).getDate()}/${(new Date(transaction.extra.created_on)).getFullYear()}
              `}
            </div>
            <div>To: {transaction.to.user.legal_names[0]}</div>
            <div>Description: {transaction.extra.note}</div>
            <div>Amount: ${transaction.amount.amount}</div>
          </div>
        ))}
          {/* <div className="transaction">
            <div>Transaction ID: ABCD1234ABCD</div>
            <div>Date: 10/4/2019</div>
            <div>To: Another Test Name</div>
            <div>Description: Payment</div>
            <div>Amount: $100.00</div>
          </div>
          <div className="transaction">
            <div>Transaction ID: ABCD1234ABCD</div>
            <div>Date: 10/4/2019</div>
            <div>To: Another Test Name</div>
            <div>Description: Payment</div>
            <div>Amount: $100.00</div>
          </div>
          <div className="transaction">
            <div>Transaction ID: ABCD1234ABCD</div>
            <div>Date: 10/4/2019</div>
            <div>To: Another Test Name</div>
            <div>Description: Payment</div>
            <div>Amount: $100.00</div>
          </div>
          <div className="transaction">
            <div>Transaction ID: ABCD1234ABCD</div>
            <div>Date: 10/4/2019</div>
            <div>To: Another Test Name</div>
            <div>Description: Payment</div>
            <div>Amount: $100.00</div>
          </div>
          <div className="transaction">
            <div>Transaction ID: ABCD1234ABCD</div>
            <div>Date: 10/4/2019</div>
            <div>To: Another Test Name</div>
            <div>Description: Payment</div>
            <div>Amount: $100.00</div>
          </div> */}
      </FormContainer>
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