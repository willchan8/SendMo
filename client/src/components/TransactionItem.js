import React from 'react';
import PropTypes from 'prop-types';

const TranasactionItem = props => 
  (
    <div className="transaction">
      <div>Transaction ID: ABCD1234ABCD</div>
      <div>Date: 10/4/2019</div>
      <div>To: Another Test Name</div>
      <div>Description: Payment</div>
      <div>Amount: $100.00</div>
    </div>

    // <div>
    //   <div>Transaction ID: {props.transaction._id}</div>
    //   <div>Date: 
    //     {`
    //       ${(new Date(props.transaction.extra.created_on)).getMonth() + 1}/${(new Date(props.transaction.extra.created_on)).getDate()}/${(new Date(props.transaction.extra.created_on)).getFullYear()}
    //     `}
    //   </div>
    //   <div>To: {props.transaction.to.user.legal_names[0]}</div>
    //   <div>Description: {props.transaction.extra.note}</div>
    //   <div>Amount: ${props.transaction.amount.amount}</div>
    // </div>
  )

  TranasactionItem.propTypes = {
    type: PropTypes.string
  }

export default TranasactionItem;