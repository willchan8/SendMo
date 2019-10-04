import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, FormContainer, Input, Button } from './StyledComponents'; 
import { connect } from 'react-redux';
import { createNode } from '../actions';
import { Link, withRouter } from 'react-router-dom';

class CreateNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: 'Node Library Checking Account',
      name: 'Node Library',
      account_num: '72347235423',
      routing_num: '051000017',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const { createNode, currentUser, history } = this.props;
    const { nickname, name, account_num, routing_num } = this.state;

    createNode({ nickname, name, account_num, routing_num, currentUser }, history);
  }

  render() {
    const { nickname, name, account_num, routing_num } = this.state;

    return (
      <FormContainer>
        <Header>Create an ACH-US Node</Header>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Account Nickname: </label>
            <Input type="text" name="nickname" onChange={this.handleChange} value={nickname} pattern=".{2,}" required title="Minimum 2 Characters" />
          </div>

          <div>
            <label>Name on Account: </label>
            <Input type="text" name="name" onChange={this.handleChange} value={name} pattern=".{2,}" required title="Minimum 2 Characters" />
          </div>

          <div>
            <label>Checking Account Number: </label>
            <Input type="text" name="account_num" onChange={this.handleChange} value={account_num} pattern=".{11}" required title="Must Be 11 Digits Long" />
          </div>

          <div>
            <label>Checking Routing Number: </label>
            <Input type="text" name="routing_num" onChange={this.handleChange} value={routing_num} pattern=".{9}" required title="Must Be 9 Digits Long" />
          </div>

          <Button type="submit">Submit</Button>

          <Link to="/dashboard"><Button>Go To Dashboard</Button></Link>
        </form>
      </FormContainer>
    )
  }
}

CreateNode.propTypes = {
  createNode: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, { createNode })(withRouter(CreateNode));