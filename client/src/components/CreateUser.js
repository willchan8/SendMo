import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, FormContainer, Input, Button } from './StyledComponents';
import { connect } from 'react-redux';
import { createUser } from '../actions';
import { Link, withRouter } from 'react-router-dom';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      phone_numbers: '',
      legal_names: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { createUser, history } = this.props;
    const { email, phone_numbers, legal_names } = this.state;

    createUser({ email, phone_numbers, legal_names });

    history.push('/node');
  }

  render() {
    const { email, password, phone_numbers, legal_names } = this.state;

    return (
      <FormContainer>
        <Header>Create Account</Header>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email: </label>
            <Input type="text" name="email" onChange={this.handleChange} value={email} placeholder='example@synapsefi.com' required />
          </div>

          <div>
            <label>Password: </label>
            <Input type="password" name="password" onChange={this.handleChange} value={password} pattern=".{5,}" placeholder='Minimum 5 Characters' required title="Minimum 5 Characters" />
          </div>

          <div>
            <label>Phone Number: </label>
            <Input type="tel" name="phone_numbers"  onChange={this.handleChange} value={phone_numbers} placeholder='555-555-5555' required />
          </div>

          <div>
            <label>Legal Name: </label>
            <Input type="text" name="legal_names" onChange={this.handleChange} value={legal_names} placeholder='Enter Full Name' required />
          </div>

          <Button type="submit">Submit</Button>
        </form>

        <Link to="/node"><Button>Go To Node</Button></Link>
      </FormContainer>
    )
  }
}

CreateAccount.propTypes = {
  createUser: PropTypes.func.isRequired
};

export default connect(null, { createUser })(withRouter(CreateAccount));