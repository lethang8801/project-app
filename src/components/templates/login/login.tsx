import React from 'react';
import { FormLogin } from '../../organisms/form/form_login/form_login';
import { ButtonCreate, ContainerForm, Heading, Register } from '../../atoms/styled/styled';

export const Login = () => {
  return (
    <ContainerForm>
      <Heading>Login</Heading>
      <FormLogin />
      <Register href={'#'}>Don’t have an account?</Register>
      <ButtonCreate>Create Account</ButtonCreate>
    </ContainerForm>
  );
};
