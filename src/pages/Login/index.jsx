import React from 'react';

import {
  LoginMain,
  LoginContainer,
  CloudContainer,
  LoginLabel,
  LoginLabelTitle,
  LoginEmail,
  LoginPassword,
  ButtonContainer,
  LoginButton,
  RegisterButton,
} from './Login.styled';

function Login() {
  return (
    <LoginMain>
      <CloudContainer />
      <LoginContainer>

        <LoginLabel htmlFor="login-email">
          <LoginLabelTitle>Email</LoginLabelTitle>
          <LoginEmail id="login-email" type="text" placeholder="Digite seu email" />
        </LoginLabel>

        <LoginLabel htmlFor="login-password">
          <LoginLabelTitle>Senha</LoginLabelTitle>
          <LoginPassword type="password" id="login-password" placeholder="Digite sua senha" />
        </LoginLabel>

        <ButtonContainer>
          <LoginButton type="button">Login</LoginButton>
          <RegisterButton type="button">Register</RegisterButton>
        </ButtonContainer>

      </LoginContainer>
    </LoginMain>
  );
}

export default Login;
