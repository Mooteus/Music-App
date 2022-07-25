import React from 'react';

import {
  LoginMain,
  LoginContainer,
  CloudContainer,
  LoginTitle,
  LoginLabel,
  LoginLabelTitle,
  LoginEmail,
  LoginPassword,
  ForgotPassword,
  ButtonContainer,
  LoginButton,
  RegisterButton,
} from './Login.styled';

function Login() {
  return (
    <LoginMain>
      <CloudContainer />
      <LoginContainer>

        <LoginTitle>Login</LoginTitle>

        <LoginLabel htmlFor="login-email">
          <LoginLabelTitle>Email</LoginLabelTitle>
          <LoginEmail id="login-email" type="text" placeholder="Digite seu email" />
        </LoginLabel>

        <LoginLabel htmlFor="login-password">
          <LoginLabelTitle>Senha</LoginLabelTitle>
          <LoginPassword type="password" id="login-password" placeholder="Digite sua senha" />
        </LoginLabel>

        <ForgotPassword href="#">Esqueci minha senha</ForgotPassword>

        <ButtonContainer>
          <LoginButton type="button">Login</LoginButton>
          <RegisterButton type="button">Register</RegisterButton>
        </ButtonContainer>

      </LoginContainer>
    </LoginMain>
  );
}

export default Login;
