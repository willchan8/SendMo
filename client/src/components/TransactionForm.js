import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TitleSmall, ItemContainer, Input, Button, Select } from './StyledComponents'; 
import { connect } from 'react-redux';
import { createTransaction } from '../actions';

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      note: '',
      receiverNodeID: '5c8ac55542edab2b2665cbf1',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { createTransaction, currentNode, balance } = this.props;
    const { amount, note, receiverNodeID } = this.state;

    if (amount > balance) {
      alert('Insufficient funds. Please ensure the amount does not exceed your available balance.');
    } else {
      createTransaction({ amount, note, receiverNodeID, currentNode });
    }

    this.setState({
      amount: '',
      note: '',
    });
  }

  render() {
    const { amount, note } = this.state;
    const { loading } = this.props;

    return (
      <ItemContainer>
        <TitleSmall>Create Transaction</TitleSmall>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Payment To: </label>
              <Select>
                <option>Another Test Name (NodeID: 5c8ac55542edab2b2665cbf1)</option>
              </Select>
          </div>

          <div>
            <label>Amount: </label>
            <Input type="number" name="amount" onChange={this.handleChange} value={amount} placeholder="0.00" required step=".01" min="0.01" />
          </div>

          <div>
            <label>What is it for?: </label>
            <Input type="text" name="note" onChange={this.handleChange} value={note} placeholder="Ex: Rent, Utilities, etc."/>
          </div>

          <Button type="submit">{loading ? "Processing..." : "Send Payment"}</Button>
        </form>
      </ItemContainer>
    )
  }
}

TransactionForm.propTypes = {
  createTransaction: PropTypes.func.isRequired,
  currentNode: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  balance: PropTypes.number,
};

const mapStateToProps = state => ({
  currentNode: state.currentNode,
  loading: state.loading,
  balance: state.balance,
});

export default connect(mapStateToProps, { createTransaction })(TransactionForm);