import React from 'react';
import Logo from '../../../asset/logo.png';
import styled from 'styled-components';

export const Header = () => {
  return (
    <Wrapper>
      <Image src={Logo} alt="logo" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12);
  padding: 15px;
`;
const Image = styled.img`
  width: 160px;
`;
