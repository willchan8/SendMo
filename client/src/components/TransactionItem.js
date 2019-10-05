import React from 'react';
import PropTypes from 'prop-types';
import { TextSmall } from './StyledComponents';

const TranasactionItem = props => 
  (
    <div className="transaction">
      <div className="row">
        <div>{props.transaction.to.user.legal_names[0]}</div>
        <div style={{color: '#ff0000'}}>-${props.transaction.amount.amount.toFixed(2)}</div>
      </div>
      <div className="row">
        <TextSmall>Description: {props.transaction.extra.note}</TextSmall>
        <TextSmall>
          {`
            ${(new Date(props.transaction.extra.created_on)).getMonth() + 1}/${(new Date(props.transaction.extra.created_on)).getDate()}/${(new Date(props.transaction.extra.created_on)).getFullYear()}
          `}
        </TextSmall>
      </div>
    </div>
  )

  TranasactionItem.propTypes = {
    type: PropTypes.object
  }

export default TranasactionItem;