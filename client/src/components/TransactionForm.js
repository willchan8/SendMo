import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, FormContainer, Input, Button } from './StyledComponents'; 
import { connect } from 'react-redux';
import { createTransaction } from '../actions';

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, body } = this.state;
    this.props.createTransaction({ title, body });
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    const { title, body } = this.state;

    return (
      <FormContainer>
        <Header>Create Transaction</Header>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Transaction: </label>
            <Input type="text" name="title" onChange={this.handleChange} value={title} />
          </div>

          <div>
            <label>Amount: </label>
            <Input type="text" name="body" onChange={this.handleChange} value={body} />
          </div>

          <Button primary type="submit">Submit</Button>
        </form>
      </FormContainer>
    )
  }
}

TransactionForm.propTypes = {
  createTransaction: PropTypes.func.isRequired
};

export default connect(null, { createTransaction })(TransactionForm);