import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTransactions } from '../actions';

class TransList extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.props.transactions.map(trans => (
          <div key={trans.id}>
            <h3>{trans.title}</h3>
            <p>{trans.body}</p>
          </div>
        ))}
      </div>
    )
  }
}

TransList.propTypes = {
  getTransactions: PropTypes.func.isRequired,
  transactions: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  transactions: state.transactions,
});

export default connect(mapStateToProps, { getTransactions })(TransList);