import React, { Component } from 'react';
import { TextSmall, ListContainer } from './StyledComponents';


class MockData extends Component {
  render() {
    return (
      <div>
        <div className="transaction">
          <div className="row">
            <div>Another Test Name</div>
            <div style={{color: '#ff0000'}}>-$80.62</div>
          </div>
          <div className="row">
            <TextSmall>Description: Cell Phone Bill</TextSmall>
            <TextSmall>10/4/2019</TextSmall>
          </div>
        </div>
        <div className="transaction">
          <div className="row">
            <div>Another Test Name</div>
            <div style={{color: '#ff0000'}}>-$1350.00</div>
          </div>
          <div className="row">
            <TextSmall>Description: Rent</TextSmall>
            <TextSmall>10/1/2019</TextSmall>
          </div>
        </div>
        <div className="transaction">
          <div className="row">
            <div>Your Employer</div>
            <div style={{color: '#28a745'}}>+$4000.00</div>
          </div>
          <div className="row">
            <TextSmall>Description: Direct Deposit</TextSmall>
            <TextSmall>9/30/2019</TextSmall>
          </div>
        </div>
        <div className="transaction">
          <div className="row">
            <div>Another Test Name</div>
            <div style={{color: '#ff0000'}}>-$60.00</div>
          </div>
          <div className="row">
            <TextSmall>Description: Concert Ticket</TextSmall>
            <TextSmall>9/15/2019</TextSmall>
          </div>
        </div>
        <div className="transaction">
          <div className="row">
            <div>Another Test Name</div>
            <div style={{color: '#ff0000'}}>-$15.45</div>
          </div>
          <div className="row">
            <TextSmall>Description: Dinner</TextSmall>
            <TextSmall>9/10/2019</TextSmall>
          </div>
        </div>
      </div>
    )
  }
}

export default MockData;