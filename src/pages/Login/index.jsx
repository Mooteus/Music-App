import React from 'react';

import {
  LoginContainer,
  LoginEmail,
  LoginPassword,
  LoginButton,
} from './Login.styled';

function Login() {
  return (
    <LoginContainer>
      <LoginEmail type="text" />
      <LoginPassword type="password" />
      <LoginButton type="button">Login</LoginButton>
    </LoginContainer>
  );
}

export default Login;
