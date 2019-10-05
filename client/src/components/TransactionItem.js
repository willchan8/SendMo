import React from 'react';
import PropTypes from 'prop-types';
import { TextSmall } from './StyledComponents';

const TranasactionItem = props => 
  (
    <div className="transaction">
      <div className="row">
        <div>Another Test Name</div>
        <div>$10000.00</div>
      </div>
      <div className="row">
        <TextSmall>Description: Payment</TextSmall>
        <TextSmall>10/4/2019</TextSmall>
      </div>
    </div>

    // <div className="transaction">
    //   <div>
    //     <div>{props.transaction.to.user.legal_names[0]}</div>
    //     <TextSmall>{props.transaction.extra.note}</TextSmall>
    //   </div>
    //   <div>
    //     <div>${props.transaction.amount.amount.toFixed(2)}</div>
    //     <TextSmall>
    //       {`
    //         ${(new Date(props.transaction.extra.created_on)).getMonth() + 1}/${(new Date(props.transaction.extra.created_on)).getDate()}/${(new Date(props.transaction.extra.created_on)).getFullYear()}
    //       `}
    //     </TextSmall>
    //   </div>
    // </div>
  )

  TranasactionItem.propTypes = {
    type: PropTypes.object
  }

export default TranasactionItem;