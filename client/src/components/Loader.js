import React from 'react';
import PropTypes from 'prop-types';
import { FormContainer, Aligner } from './StyledComponents';
import Spinner from 'react-bootstrap/Spinner';

const Loader = props => 
  (
    <FormContainer>
      <Aligner>
        <Spinner animation="border" />
        <div className='pad'>{`Creating ${props.type}...`}</div>
      </Aligner>
    </FormContainer>
  )

  Loader.propTypes = {
    type: PropTypes.string
  }

export default Loader;