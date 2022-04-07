import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import styled from 'styled-components';

export const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <Heading>Login</Heading>
      <Text>Email</Text>
      <Input placeholder={'TEXT'} />
      <Text>Password</Text>
      <a href={'#'}>Forgot password?</a>
      <Input style={{ position: 'relative' }} type={passwordShown ? 'text' : 'password'} placeholder={'TEXT'} />
      <FaEye style={{ position: 'absolute' }} onClick={togglePassword} />
    </>
  );
};

const Heading = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`;
const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #000000;
`;
const Input = styled.input`
  padding: 10px 10px 10px 12px;
  border-radius: 4px;
  margin: 8px 0px;
  font-size: 14px;
  color: black;
`;
