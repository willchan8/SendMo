import React from 'react';
import PropTypes from 'prop-types';
import { FormContainer } from './StyledComponents';
import Spinner from 'react-bootstrap/Spinner';

const Loader = props => 
  (
    <FormContainer>
      <div className="center">
        <Spinner animation="border" />
        <div className='spacing'>{`Creating ${props.type}...`}</div>
      </div>
    </FormContainer>
  )

  Loader.propTypes = {
    type: PropTypes.string
  }

export default Loader;