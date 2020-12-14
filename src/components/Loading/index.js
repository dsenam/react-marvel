import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Container } from './styles';

function Loading({ loading }) {
  if (loading === true) {
    return (
      <Container>
        <FaSpinner />
      </Container>
    );
  }
}

export default Loading;
