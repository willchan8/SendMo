import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, FormContainer, Input, Button, Select } from './StyledComponents'; 
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

    const { createTransaction, currentNode } = this.props;
    const { amount, note, receiverNodeID } = this.state;

    createTransaction({ amount, note, receiverNodeID, currentNode });

    this.setState({
      amount: '',
      note: '',
    });
  }

  render() {
    const { amount, note } = this.state;

    return (
      <FormContainer>
        <Header>Create Transaction</Header>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>To: </label>
              <Select>
                <option>Another Test Name</option>
              </Select>
          </div>

          <div>
            <label>Amount: </label>
            <Input type="text" name="amount" onChange={this.handleChange} value={amount} />
          </div>

          <div>
            <label>What is it for?: </label>
            <Input type="text" name="note" onChange={this.handleChange} value={note} />
          </div>

          <Button primary type="submit">Submit</Button>
        </form>
      </FormContainer>
    )
  }
}

TransactionForm.propTypes = {
  createTransaction: PropTypes.func.isRequired,
  currentNode: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  currentNode: state.currentNode,
});

export default connect(mapStateToProps, { createTransaction })(TransactionForm);