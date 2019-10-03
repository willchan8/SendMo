import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, FormContainer, Input, Button } from './StyledComponents';
import { connect } from 'react-redux';
import { createUser } from '../actions';

class LoginForm extends Component {
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

    const { email, phone_numbers, legal_names } = this.state;

    this.props.createUser({ email, phone_numbers, legal_names });
  }

  render() {
    const { email, password, phone_numbers, legal_names } = this.state;

    return (
      <FormContainer>
        <Header>Create Account</Header>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email: </label>
            <Input type="text" name="email" onChange={this.handleChange} value={email} placeholder='example@synapsefi.com' />
          </div>

          <div>
            <label>Password: </label>
            <Input type="password" name="password" onChange={this.handleChange} value={password} placeholder='Minimum 6 Characters'/>
          </div>

          <div>
            <label>Phone Number: </label>
            <Input type="text" name="phone_numbers" onChange={this.handleChange} value={phone_numbers} placeholder='555-555-5555'/>
          </div>

          <div>
            <label>Legal Name: </label>
            <Input type="text" name="legal_names" onChange={this.handleChange} value={legal_names} placeholder='Enter Full Name'/>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </FormContainer>
    )
  }
}

LoginForm.propTypes = {
  createUser: PropTypes.func.isRequired
};

export default connect(null, { createUser })(LoginForm);