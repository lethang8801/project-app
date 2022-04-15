import React from 'react';
import Logo from '../../../assets/logo.png';
import { Wrapper, Image } from '../../atoms/styled/styled';

export const Header = () => {
  return (
    <Wrapper>
      <Image src={Logo} alt="logo" />
    </Wrapper>
  );
};
