import React from 'react';
import PropTypes from 'prop-types';
import { FormContainer, Aligner } from './StyledComponents';
import Spinner from 'react-bootstrap/Spinner';

const Loader = props => 
  (
    <FormContainer>
      <div className="center">
        <Spinner animation="border" />
        <div className='pad'>{`Creating ${props.type}...`}</div>
      </div>
    </FormContainer>
  )

  Loader.propTypes = {
    type: PropTypes.string
  }

export default Loader;