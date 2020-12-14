import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  );
}

export default Header;
